import React, { useContext } from 'react'
import { Station as IStation } from '../interfaces/station'
import PathContext from '../context/path/pathContext'
import LanguageContext from '../context/language/languageContext'

const Station = ({ station, index }: { station: IStation; index: number }) => {
  const { language } = useContext(LanguageContext)
  const { path } = useContext(PathContext)

  const changingStation =
    station.intersecting &&
    path[index + 1]?.line &&
    path[index - 1]?.line &&
    path[index + 1]?.line !== path[index - 1]?.line

  return (
    <li className='station'>
      <p>
        {language === 'ARABIC' ? station.name.arabic : station.name.english}
      </p>
    </li>
  )
}

export default Station
