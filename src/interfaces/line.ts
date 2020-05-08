import { Station } from './station'

export interface Direction {
  arabic: string
  english: string
}

export interface Line {
  stations: Station[]
  direction: {
    start: Direction
    end: Direction
  }
}
