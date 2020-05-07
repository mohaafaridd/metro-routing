import { Station } from '../station'

export interface State {
  path: (Station | undefined)[]
  weight: number
}

export interface Methods {
  setPath(path: (Station | undefined)[]): void
  setWeight(weight: number): void
}

export interface Action {
  type: ActionTypes
  payload: State
}

export type ActionTypes = 'SET_PATH' | 'SET_WEIGHT'
