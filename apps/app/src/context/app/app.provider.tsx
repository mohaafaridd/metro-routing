import { useEffect, useMemo, useState } from "react";
import { AppContext, Station } from "./app.context";
import StationsJSON from "./stations.json";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const stations = useMemo<Station[]>(() => StationsJSON, []);
  const graph = useMemo<Record<string, Station>>(() => {
    return stations.reduce(
      (acc, station) => {
        acc[station.id] = station;
        return acc;
      },
      {} as Record<string, Station>,
    );
  }, [stations]);

  const [startingStation, setStartingStation] = useState<Station | null>(null);
  const [endingStation, setEndingStation] = useState<Station | null>(null);
  const [path, setPath] = useState<Station[]>([]);

  useEffect(() => {
    findPath();
  }, [startingStation, endingStation]);

  function findShortestPath(startId: string, endId: string): string[] | null {
    // Distance map: stores the shortest distance to each station
    const distances: { [key: string]: number } = {};
    // Previous station map: tracks the path
    const previous: { [key: string]: string | null } = {};
    // Priority queue (min-heap) implemented with an array
    const queue: { id: string; distance: number }[] = [];

    // Initialize distances and queue
    for (const stationId in graph) {
      distances[stationId] = Infinity;
      previous[stationId] = null;
    }

    distances[startId] = 0;
    queue.push({ id: startId, distance: 0 });

    while (queue.length > 0) {
      // Get the station with the smallest distance
      queue.sort((a, b) => a.distance - b.distance);
      const { id: currentId } = queue.shift()!;

      // If we've reached the target station, reconstruct the path
      if (currentId === endId) {
        const path: string[] = [];
        let current: string | null = endId;
        while (current) {
          path.unshift(current);
          current = previous[current];
        }
        return path;
      }

      const currentStation = graph[currentId];
      if (!currentStation) continue; // Skip if station doesn't exist

      // Explore neighbors (next and previous connections)
      const neighbors = [...currentStation.next, ...currentStation.previous];
      for (const neighborId of neighbors) {
        const tentativeDistance = distances[currentId] + 1; // Assuming uniform edge weight (e.g., 1 for each connection)

        if (tentativeDistance < distances[neighborId.station]) {
          distances[neighborId.station] = tentativeDistance;
          previous[neighborId.station] = currentId;
          queue.push({ id: neighborId.station, distance: tentativeDistance });
        }
      }
    }

    // If we exit the loop without finding a path, return null
    return null;
  }

  const findPath = () => {
    if (!startingStation || !endingStation) return;

    const path = findShortestPath(startingStation.id, endingStation.id);

    if (!path) return;

    setPath(path.map((id) => graph[id]));
  };

  return (
    <AppContext.Provider
      value={{
        stations,
        startingStation,
        endingStation,
        path,
        setStartingStation: (id) => {
          setStartingStation(
            stations.find((station) => station.id === id) ?? null,
          );
        },
        setEndingStation: (id) => {
          setEndingStation(
            stations.find((station) => station.id === id) ?? null,
          );
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
