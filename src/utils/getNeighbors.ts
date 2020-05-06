import { lineOne, lineTwo, lineThree } from '../database/lines'
import { Station } from '../interfaces/station'
import { Line } from '../interfaces/line'

export const getNeighbors = (station: Station) => {
  const [lineOneIndex, lineTwoIndex, lineThreeIndex] = [
    getIndex(station, lineOne),
    getIndex(station, lineTwo),
    getIndex(station, lineThree),
  ]

  const lineOneNeighbors =
    lineOneIndex > -1
      ? [lineOne.stations[lineOneIndex - 1], lineOne.stations[lineOneIndex + 1]]
      : []

  const lineTwoNeighbors =
    lineTwoIndex > -1
      ? [lineTwo.stations[lineTwoIndex - 1], lineTwo.stations[lineTwoIndex + 1]]
      : []

  const lineThreeNeighbors =
    lineThreeIndex > -1
      ? [
          lineThree.stations[lineThreeIndex - 1],
          lineThree.stations[lineThreeIndex + 1],
        ]
      : []

  const neighbors = [
    lineOneNeighbors,
    lineTwoNeighbors,
    lineThreeNeighbors,
  ].flat()

  return neighbors
}

const getIndex = (station: Station, line: Line) => {
  return line.stations.findIndex((i) => i.name.english === station.name.english)
}
