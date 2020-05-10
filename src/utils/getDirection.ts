import { Station } from '../interfaces/station'
import _ from 'lodash'
import { getLine } from './getLine'

export const getDirection = (
  trigger: number,
  source: Station,
  destination: Station
) => {
  const line = getLine(source, destination)
  return trigger > 0
    ? line.direction.start
    : trigger < 0
    ? line.direction.end
    : undefined
}
