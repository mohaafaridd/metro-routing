import React, { useContext, useState, useEffect, Fragment } from 'react'
import { Station as IStation } from '../interfaces/station'
import PathContext from '../context/path/pathContext'
import LanguageContext from '../context/language/languageContext'
import { Direction } from '../interfaces/line'
import { getStationTrigger } from '../utils/getStationTrigger'
import { getDirection } from '../utils/getDirection'

const Station = ({ station, index }: { station: IStation; index: number }) => {
  const { language } = useContext(LanguageContext)
  const { path } = useContext(PathContext)

  const [before, setBefore] = useState(path[index - 1])
  const [after, setAfter] = useState(path[index + 1])

  const [starting, setStarting] = useState(false)
  const [middle, setMiddle] = useState(false)
  const [ending, setEnding] = useState(false)
  const [canChange, setCanChange] = useState(station.intersecting)
  const [direction, setDirection] = useState<Direction | undefined>()

  useEffect(() => {
    if (after && !before) setStarting(true)
    if (after && before) setMiddle(true)
    if (!after && before) setEnding(true)
  }, [before, after])

  useEffect(() => {
    if (starting) {
      const trigger = getStationTrigger(station, path[index + 1])
      setDirection(getDirection(trigger, station, path[index + 1]))
    }
  }, [path])

  return (
    <Fragment>
      {direction && (
        <li className='direction' dir={language === 'ARABIC' ? 'rtl' : 'ltr'}>
          <p>{language === 'ARABIC' ? direction.arabic : direction.english}</p>
        </li>
      )}
      <li className='station' dir={language === 'ARABIC' ? 'rtl' : 'ltr'}>
        <p>
          {language === 'ARABIC' ? station.name.arabic : station.name.english}
        </p>
      </li>
    </Fragment>
  )
}

export default Station
