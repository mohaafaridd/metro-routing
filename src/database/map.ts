import { lineOne, lineTwo, lineThree } from './lines'
import { Line } from '../interfaces/line'
import { getNeighbors } from '../utils/getNeighbors'
import { generateNode } from '../utils/generateNode'
import { generateVertex } from '../utils/generateVertex'
import { Map } from '../interfaces/map'

const drawLine = (line: Line) =>
  line.stations.reduce((acc: Map, station) => {
    const neighbors = getNeighbors(station)
    const nodes = neighbors.map((neighbor) => generateNode(neighbor))
    const vertex = generateVertex(station, nodes, 1)
    acc[station.name.english] = vertex
    return acc
  }, {})

const generateMap = () => {
  const list: Map = {
    ...drawLine(lineOne),
    ...drawLine(lineTwo),
    ...drawLine(lineThree),
  }

  console.log('list', list)
}

export default generateMap
