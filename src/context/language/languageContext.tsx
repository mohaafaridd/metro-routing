import { createContext } from 'react'
import { State, Methods } from '../../interfaces/context/language'

export const LanguageContext = createContext<State & Methods>({
  language: 'ARABIC',
  setLanguage: () => undefined,
})

export const { Provider: LanguageProvider, Consumer } = LanguageContext
export default LanguageContext
