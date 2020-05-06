import React, { FC, useReducer } from 'react'
import { LanguageProvider } from './languageContext'
import { State, Methods } from '../../interfaces/context/language'
import reducer from './languageReducer'

const ThemeState: FC = ({ children }) => {
  const initialState: State = {
    language: 'ARABIC',
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const methods: Methods = {
    setLanguage(language) {
      dispatch({
        type: 'SET_LANGUAGE',
        payload: {
          language,
        },
      })
    },
  }

  return (
    <LanguageProvider
      value={{
        ...state,
        ...methods,
      }}
    >
      {children}
    </LanguageProvider>
  )
}

export default ThemeState
