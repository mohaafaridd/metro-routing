import _ from 'lodash'
import { Station } from '../interfaces/station'
import { lineOne, lineTwo, lineThree } from '../database/lines'

export const getLine = (source: Station, destination: Station) => {
  const lines = [lineOne, lineTwo, lineThree]
  const [lineIndex] = _.intersection(source.line, destination.line)
  return lines[lineIndex - 1]
}
