import React, { useContext } from 'react'
import PathContext from '../context/path/pathContext'
import Station from './Station'
import LanguageContext from '../context/language/languageContext'

const Path = () => {
  const { language } = useContext(LanguageContext)
  const { path } = useContext(PathContext)

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
