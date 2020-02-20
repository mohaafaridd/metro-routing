export interface Station {
  english: string;
  arabic: string;
}

export interface Line {
  id: number;
  stations: Station[];
  top: Station;
  bottom: Station;
}
