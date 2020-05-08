import React, { useContext, useState, useEffect } from 'react'
import PathContext from '../context/path/pathContext'
import Station from './Station'
import LanguageContext from '../context/language/languageContext'
import { getDirections } from '../utils/getDirections'
import { drawPath } from '../utils/drawPath'
import { Direction } from '../interfaces/line'

const Path = () => {
  const { language } = useContext(LanguageContext)
  const { path } = useContext(PathContext)
  const [directions, setDirections] = useState(getDirections(path))

  useEffect(() => {
    setDirections(getDirections(path))
    console.log('directions', getDirections(path))
  }, [path])

  useEffect(() => {
    const x = drawPath(path, directions as Direction[])
  }, [directions])

  return (
    <div>
      <ul dir={language === 'ARABIC' ? 'rtl' : 'ltr'}>
        {path.map((station, index) => (
          <Station key={index} station={station} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default Path
