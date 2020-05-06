import { createContext } from 'react'
import { State, Methods } from '../../interfaces/context/theme'

export const ThemeContext = createContext<State & Methods>({
  theme: 'dark',
  setTheme: () => undefined,
})

export const { Provider: ThemeProvider, Consumer } = ThemeContext
export default ThemeContext
