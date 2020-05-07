import { Station } from '../station'

export interface State {
  path: Station[]
  weight: number
}

export interface Methods {
  setPath(path: Station[]): void
  setWeight(weight: number): void
}

export interface Action {
  type: ActionTypes
  payload: State
}

export type ActionTypes = 'SET_PATH' | 'SET_WEIGHT'
