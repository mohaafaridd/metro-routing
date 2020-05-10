import React, { useContext } from 'react'
import { LanguageContext, PathContext } from '../context'
import Station from './Station'

const Path = () => {
  const { language } = useContext(LanguageContext)
  const { path } = useContext(PathContext)

  return (
    <div id='path'>
      <ul dir={language === 'ARABIC' ? 'rtl' : 'ltr'}>
        {path.map((station, index) => (
          <Station key={index} station={station} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default Path
