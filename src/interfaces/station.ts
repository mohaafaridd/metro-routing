export interface Station {
  name: {
    arabic: string
    english: string
  }

  intersecting: boolean
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
