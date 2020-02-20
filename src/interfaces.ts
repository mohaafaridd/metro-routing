export interface Station {
  english: string;
  arabic: string;
}

export interface Line {
  stations: Station[];
  top: Station;
  bottom: Station;
}
