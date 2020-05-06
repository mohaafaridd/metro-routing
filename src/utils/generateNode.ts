import { Station, Node } from '../interfaces/station'

export const generateNode = (station: Station, weight: number = 1): Node => ({
  name: station.name.english,
  weight,
})
