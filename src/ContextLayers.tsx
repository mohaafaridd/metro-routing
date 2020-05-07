import React, { FC } from 'react'
import ThemeState from './context/theme/ThemeState'
import LanguageState from './context/language/LanguageState'
import PathState from './context/path/PathState'

const ContextLayers: FC = ({ children }) => {
  return (
    <ThemeState>
      <LanguageState>
        <PathState>{children}</PathState>
      </LanguageState>
    </ThemeState>
  )
}

export default ContextLayers
