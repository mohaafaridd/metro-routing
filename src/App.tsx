import React, { useEffect } from 'react'
import generateMap from './database/map'
import { lineOne, lineTwo } from './database/lines'
import { getShortestPath } from './utils/getShortestPath'
const App = () => {
  useEffect(() => {
    const map = generateMap()
    const shortestPath = getShortestPath(
      map,
      lineOne.stations[0],
      lineTwo.stations[0]
    )
    console.log(shortestPath)
  })

  return (
    <div>
      <h1>Egyptian Metro Lines</h1>
    </div>
  )
}

export default App
