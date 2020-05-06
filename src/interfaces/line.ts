import { Station } from './station'

export interface Line {
  stations: Station[]
  direction: {
    start: {
      arabic: string
      english: string
    }

    end: {
      arabic: string
      english: string
    }
  }
}
