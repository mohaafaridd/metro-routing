import { createContext } from "react";

interface Connection {
  station: string;
  direction: string[];
  weight?: number;
  line: number;
}

export interface Station {
  id: string;

  location: {
    latitude: number;
    longitude: number;
  };

  lines: number[];

  connections: Connection[];

  direction?: {
    to: number;
    direction: string;
  };
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
