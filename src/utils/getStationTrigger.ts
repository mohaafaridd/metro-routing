// A trigger is a value between 1 and -1
// It determines if a station comes before another station
// If value is 1 then source is after destination
// If value is -1 then source is before destination

import { Station } from '../interfaces/station'
import { getLine } from './getLine'

export const getStationTrigger = (source: Station, destination: Station) => {
  const line = getLine(source, destination)

  const sourceIndex = line.stations.findIndex(
    (i) => i.name.english === source.name.english
  )
  const destinationIndex = line.stations.findIndex(
    (i) => i.name.english === destination.name.english
  )

  return sourceIndex - destinationIndex
}
