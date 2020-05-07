import { createContext } from 'react'
import { State, Methods } from '../../interfaces/context/path'

export const PathContext = createContext<State & Methods>({
  path: [],
  weight: 0,
  setPath: () => undefined,
  setWeight: () => undefined,
})

export const { Provider: PathProvider, Consumer } = PathContext
export default PathContext
