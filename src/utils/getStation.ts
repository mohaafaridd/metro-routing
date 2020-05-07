import { lines } from '../database/lines'

export const getStation = (key: string) =>
  lines.find((station) => station.name.english === key)
