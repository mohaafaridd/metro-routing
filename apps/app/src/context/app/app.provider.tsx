import { useEffect, useMemo, useState } from "react";
import { AppContext, Station } from "./app.context";
import StationsJSON from "./stations.json";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const stations = useMemo<Station[]>(() => StationsJSON, []);

  const [startingStation, setStartingStation] = useState<Station | null>(null);
  const [endingStation, setEndingStation] = useState<Station | null>(null);
  const graph = useMemo<Record<string, Station>>(() => {
    return stations
      .map((station) => {
        station.next = station.next.map((next) => {
          return {
            ...next,
            weight: startingStation?.lines.includes(next.line)
              ? 1
              : endingStation?.lines.includes(next.line)
                ? 2
                : 10,
          };
        });
        station.previous = station.previous.map((previous) => ({
          ...previous,
          weight: startingStation?.lines.includes(previous.line)
            ? 1
            : endingStation?.lines.includes(previous.line)
              ? 2
              : 10,
        }));
        return station;
      })
      .reduce(
        (acc, station) => {
          acc[station.id] = station;

          return acc;
        },
        {} as Record<string, Station>,
      );
  }, [stations, startingStation, endingStation]);

  const [path, setPath] = useState<Station[]>([]);

  useEffect(() => {
    findPath();
  }, [startingStation, endingStation]);

  function findShortestPath(startId: string, endId: string): string[] | null {
    const queue: { id: string; line: number; distance: number }[] = [];
    const distances: { [key: string]: number } = {}; // Key: "stationId_line", Value: Distance
    const previous: { [key: string]: { id: string; line: number } | null } = {}; // Tracks the path with station-line pairs

    // Initialize distances
    for (const stationId in graph) {
      for (const line of graph[stationId].lines) {
        distances[`${stationId}_${line}`] = Infinity;
        previous[`${stationId}_${line}`] = null;
      }
    }

    // Add the starting station to the queue for all its lines
    const startStation = graph[startId];
    if (!startStation) return null;

    for (const line of startStation.lines) {
      const startKey = `${startId}_${line}`;
      distances[startKey] = 0;
      queue.push({ id: startId, line, distance: 0 });
    }

    while (queue.length > 0) {
      // Sort the queue by distance and pick the station with the shortest distance
      queue.sort((a, b) => a.distance - b.distance);
      const {
        id: currentId,
        line: currentLine,
        distance: currentDistance,
      } = queue.shift()!;

      const currentKey = `${currentId}_${currentLine}`;
      if (currentDistance > distances[currentKey]) continue;

      const currentStation = graph[currentId];
      if (!currentStation) continue;

      // Explore neighbors via "next" and "previous" connections
      const connections = [...currentStation.next, ...currentStation.previous];
      for (const connection of connections) {
        const neighborId = connection.station;
        const neighborStation = graph[neighborId];
        if (!neighborStation) continue;

        const connectionWeight = connection.weight ?? 1; // Default weight is 1 if undefined
        for (const neighborLine of neighborStation.lines) {
          const neighborKey = `${neighborId}_${neighborLine}`;
          const weight =
            neighborLine === currentLine
              ? connectionWeight
              : connectionWeight + 2; // Line switch adds penalty
          const tentativeDistance = distances[currentKey] + weight;

          if (tentativeDistance < distances[neighborKey]) {
            distances[neighborKey] = tentativeDistance;
            previous[neighborKey] = { id: currentId, line: currentLine };
            queue.push({
              id: neighborId,
              line: neighborLine,
              distance: tentativeDistance,
            });
          }
        }
      }
    }

    // Find the shortest path to the target station
    let minDistance = Infinity;
    let endKey: string | null = null;
    for (const line of graph[endId].lines) {
      const key = `${endId}_${line}`;
      if (distances[key] < minDistance) {
        minDistance = distances[key];
        endKey = key;
      }
    }

    if (!endKey) return null;

    // Reconstruct the path (no duplication for line switches)
    const path: string[] = [];
    let currentKey: string | null = endKey;
    while (currentKey) {
      const [stationId] = currentKey.split("_");
      path.unshift(stationId); // Add station to the path
      currentKey = previous[currentKey]
        ? `${previous[currentKey]!.id}_${previous[currentKey]!.line}`
        : null;
    }

    return path;
  }
  const findPath = () => {
    if (!startingStation || !endingStation) return;

    console.log(startingStation.id, endingStation.id);
    const path = findShortestPath(startingStation.id, endingStation.id);
    console.log(path);
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
