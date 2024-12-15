import { useEffect, useMemo, useState } from "react";
import { AppContext, Station } from "./app.context";
import StationsJSON from "./stations.json";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const stations = useMemo<Station[]>(() => StationsJSON, []);
  const [startingStation, setStartingStation] = useState<Station | null>(null);
  const [endingStation, setEndingStation] = useState<Station | null>(null);
  const [path, setPath] = useState<Station[]>([]);

  useEffect(() => {
    findPath();
  }, [startingStation, endingStation]);

  const findPath = () => {
    if (!startingStation || !endingStation) return;

    setPath([startingStation, endingStation]);
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
