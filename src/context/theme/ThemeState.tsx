import React, { FC, useReducer } from 'react'
import { ThemeProvider } from './themeContext'
import { State, Methods } from '../../interfaces/context/theme'
import reducer from './themeReducer'

const ThemeState: FC = ({ children }) => {
  const initialState: State = {
    theme: 'light',
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const methods: Methods = {
    setTheme(theme) {
      dispatch({
        type: 'SET_THEME',
        payload: {
          theme,
        },
      })
    },
  }

  return (
    <ThemeProvider
      value={{
        ...state,
        ...methods,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default ThemeState
