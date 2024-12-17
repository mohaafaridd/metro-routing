import { useEffect, useMemo, useState } from "react";
import { AppContext, Station, Strategy } from "./app.context";
import StationsJSON from "./stations.json";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [startingStation, setStartingStation] = useState<Station | null>(null);
  const [endingStation, setEndingStation] = useState<Station | null>(null);
  const [strategy, setStrategy] = useState<Strategy>(Strategy.LEAST_SWITCHING);

  const stations = useMemo<Station[]>(() => StationsJSON, []);

  const graph = useMemo<Record<string, Station>>(() => {
    const SHORTEST_WEIGHT = 1;
    const LEAST_SWITCHING_WEIGHT = 10;
    return stations
      .map((station) => {
        station.connections = station.connections.map((connection) => {
          let weight = 0;

          const onSameStartingLine = startingStation?.lines.includes(
            connection.line,
          );

          const onEndingLine = endingStation?.lines.includes(connection.line);

          if (onSameStartingLine) {
            weight = 1;
          } else if (onEndingLine) {
            weight =
              strategy === Strategy.SHORTEST
                ? SHORTEST_WEIGHT
                : LEAST_SWITCHING_WEIGHT;
          } else {
            weight = 20;
          }

          return {
            ...connection,
            weight,
          };
        });
        return station;
      })
      .reduce(
        (acc, station) => {
          acc[station.id] = station;

          return acc;
        },
        {} as Record<string, Station>,
      );
  }, [stations, strategy]);

  const [path, setPath] = useState<Station[]>([]);

  useEffect(() => {
    findPath();
  }, [startingStation, endingStation, strategy]);

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

      for (const connection of currentStation.connections) {
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

  const addSwitchingPoints = (stations: Station[]) => {
    const path: Record<string, Station> = {};

    // group stations by common direction but in reverse to remove possible duplicates
    for (const station of stations.reverse()) {
      if (!station.connections.length) continue;
      const [connection] = station.connections;
      const [direction] = connection.direction;
      path[direction] = station;
    }

    for (const entry of Object.entries(path)) {
      const [direction, station] = entry;
      const [connection] = station.connections;
      path[direction].direction = {
        to: connection.line,
        direction: station.connections[0].direction[0],
      };
    }

    stations = stations
      .map((station) => {
        const updatedStation = Object.values(path).find(
          (p) => p.id === station.id,
        );

        if (!updatedStation) return station;

        return updatedStation;
      })
      .reverse();

    return stations;
  };

  const findPath = () => {
    if (!startingStation || !endingStation) return;

    const shortestPath = findShortestPath(startingStation.id, endingStation.id);

    if (!shortestPath) return;

    let stations: Station[] = shortestPath
      .map((id) => ({ ...graph[id] }))
      .map((station, index, stations) => {
        const nextStation = stations[index + 1];
        if (!nextStation) {
          station.connections = [];
          return station;
        }

        station.connections = station.connections.filter(
          (connection) => connection.station === nextStation.id,
        );

        return station;
      });

    stations = addSwitchingPoints(stations);

    setPath(stations);
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
        strategy,
        setStrategy: (strategy) => {
          setStrategy(strategy);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
