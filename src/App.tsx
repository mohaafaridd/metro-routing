import React, { useContext, useEffect } from 'react'
import { ThemeContext, LanguageContext } from './context'
import Search from './components/Search'
import Path from './components/Path'
import ThemeToggler from './components/ThemeToggler'
import LanguageToggler from './components/LanguageToggler'
import { Theme } from './interfaces/context/theme'
import { Language } from './interfaces/context/language'
const App = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { language, setLanguage } = useContext(LanguageContext)

  useEffect(() => {
    const hasTheme = localStorage.getItem('theme')
    if (hasTheme) {
      const localTheme = localStorage.getItem('theme') as Theme
      localTheme === 'light' ? setTheme(localTheme) : setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }, [theme])

  useEffect(() => {
    const hasLanguage = localStorage.getItem('language')
    if (hasLanguage) {
      const localLanguage = localStorage.getItem('language') as Language
      localLanguage === 'ARABIC'
        ? setLanguage(localLanguage)
        : setLanguage('ENGLISH')
    } else {
      localStorage.setItem('language', 'ARABIC')
      setLanguage('ARABIC')
    }
  }, [language])

  return (
    <div id='app' className={theme}>
      <ThemeToggler />
      <LanguageToggler />
      <Search />
      <Path />
    </div>
  )
}

export default App
