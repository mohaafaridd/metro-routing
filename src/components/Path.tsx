import React, { useContext, useState, useEffect } from 'react'
import PathContext from '../context/path/pathContext'
import Station from './Station'
import LanguageContext from '../context/language/languageContext'
import { getDirections } from '../utils/getDirections'

const Path = () => {
  const { language } = useContext(LanguageContext)
  const { path } = useContext(PathContext)
  const [directions, setDirections] = useState(getDirections(path))

  useEffect(() => {
    setDirections(getDirections(path))
  }, [path])

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
