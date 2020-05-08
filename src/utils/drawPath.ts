import _ from 'lodash'
import { Station } from '../interfaces/station'
import { Direction } from '../interfaces/line'

interface Directed {
  direction: Direction
  stations: Station[]
}

type Path = Directed[]

export const drawPath = (path: Station[], directions: Direction[]) => {
  console.log('path', path)
  console.log('directions', directions)
}
