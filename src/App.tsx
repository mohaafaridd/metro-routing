import React, { useEffect } from 'react'
import generateMap from './database/map'

const App = () => {
  useEffect(() => {
    generateMap()
  })
  return (
    <div>
      <h1>Egyptian Metro Lines</h1>
    </div>
  )
}

export default App
