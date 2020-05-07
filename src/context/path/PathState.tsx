import React, { FC, useReducer } from 'react'
import { PathProvider } from './pathContext'
import { State, Methods } from '../../interfaces/context/path'
import reducer from './pathReducer'

const PathState: FC = ({ children }) => {
  const initialState: State = {
    path: [],
    weight: 0,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const methods: Methods = {
    setPath(path) {
      dispatch({
        type: 'SET_PATH',
        payload: {
          path: path.filter((station) => station !== undefined),
          weight: 0,
        },
      })
    },

    setWeight(weight) {
      dispatch({
        type: 'SET_WEIGHT',
        payload: {
          path: [],
          weight,
        },
      })
    },
  }

  return (
    <PathProvider
      value={{
        ...state,
        ...methods,
      }}
    >
      {children}
    </PathProvider>
  )
}

export default PathState
