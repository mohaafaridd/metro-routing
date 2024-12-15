import { createContext } from "react";

interface Connection {
  station: string;
  direction: string;
}

export interface Station {
  id: string;

  location: {
    latitude: number;
    longitude: number;
  };

  lines: number[];

  next: Connection[];
  previous: Connection[];
}

interface AppContextType {
  stations: Station[];
  startingStation: Station | null;
  setStartingStation: (id: string) => void;
  endingStation: Station | null;
  setEndingStation: (id: string) => void;
  path: Station[];
}

export const AppContext = createContext<AppContextType>({
  stations: [],
  startingStation: null,
  setStartingStation: () => {},
  endingStation: null,
  setEndingStation: () => {},
  path: [],
});
