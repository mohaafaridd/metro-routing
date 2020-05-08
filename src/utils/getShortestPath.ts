import { Map } from '../interfaces/map'

type Nodes = { [key: string]: number }

const sortByWeight = (nodes: Nodes, map: Map) =>
  Object.keys(nodes).sort((a, b) => map[a].weight - map[b].weight)

const shortestPathPoints = (map: Map, start: string, finish: string) => {
  let next = finish
  const path: string[] = []

  while (next !== start) {
    let MIN_WEIGHT = Number.MAX_VALUE
    let MIN_VERTEX = ''

    for (const node of map[next].nodes) {
      if (node.weight + map[node.name].weight < MIN_WEIGHT) {
        MIN_WEIGHT = map[node.name].weight
        MIN_VERTEX = node.name
      }
    }

    path.push(MIN_VERTEX)
    next = MIN_VERTEX
  }

  return path
}

export const getShortestPath = (map: Map, start: string, finish: string) => {
  const nodes: Nodes = {}

  // This loop to set the starting point weight with 0
  // That to make sure that in the next step we choose it as the starting point
  for (const key in map) {
    if (map[key].name === start) map[key].weight = 0
    else map[key].weight = Number.MAX_VALUE

    nodes[map[key].name] = map[key].weight
  }

  while (Object.keys(nodes).length > 0) {
    // sort nodes by weight
    const sorted = sortByWeight(nodes, map)
    // select the lightest weight available
    const current = map[sorted[0]]
    // change the weights of the nodes to the
    // accumulated weight
    for (const node of current.nodes) {
      const weight = current.weight + node.weight
      if (weight < map[node.name].weight) map[node.name].weight = weight
    }
    // deletes used node
    delete nodes[sorted[0]]
  }

  const finalWeight = map[finish].weight
  let path = shortestPathPoints(map, start, finish).reverse()
  path.push(finish)
  return path
}
