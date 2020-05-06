import { Station, Vertex, Node } from '../interfaces/station'

export const generateVertex = (
  station: Station,
  neighbors: Node[],
  weight: number = 1
): Vertex => ({
  name: station.name.english,
  nodes: neighbors,
  weight,
})
