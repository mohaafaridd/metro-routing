import React, { useContext } from 'react'
import Search from './components/Search'
import Path from './components/Path'
import ThemeContext from './context/theme/themeContext'
const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id='app' className={theme}>
      <h1 className='text-gray-500'>Egyptian Metro Lines</h1>
      <Search />
      <Path />
    </div>
  )
}

export default App
