export interface Station {
  name: {
    arabic: string
    english: string
  }

  intersecting: boolean
  line: number | number[]
}

export interface Node {
  name: string
  weight: number
}

export interface Vertex {
  name: string
  nodes: Node[]
  weight: number
}
