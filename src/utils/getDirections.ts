import _ from 'lodash'
import { Station } from '../interfaces/station'
import { lineOne, lineTwo, lineThree } from '../database/lines'

export const getDirections = (path: Station[]) => {
  const lines = [lineOne, lineTwo, lineThree]

  const directions = _.uniq(
    path.map((station, index) => {
      if (index === path.length - 1) return undefined

      // Destination
      const destination = path[index + 1]

      // Getting the wanted line index
      const lineIndex = _.intersection(station.line, destination.line)[0]
      const line = lines[lineIndex - 1]

      // Getting proper direction trigger (-) from top to bottom (+) from bottom to top
      const trigger =
        line.stations.findIndex(
          (source) => source.name.english === station.name.english
        ) -
        line.stations.findIndex(
          (source) => source.name.english === destination.name.english
        )

      if (trigger > 0) return line.direction.start
      else return line.direction.end
    })
  )

  return directions.filter((direction) => direction !== undefined)
}
