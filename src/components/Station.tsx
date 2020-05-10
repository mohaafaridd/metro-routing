import React, { useContext, useState, useEffect, Fragment } from 'react'
import { Station as IStation } from '../interfaces/station'
import PathContext from '../context/path/pathContext'
import LanguageContext from '../context/language/languageContext'
import { Direction } from '../interfaces/line'
import { getStationTrigger } from '../utils/getStationTrigger'
import { getDirection } from '../utils/getDirection'
import { getLine } from '../utils/getLine'

const Station = ({ station, index }: { station: IStation; index: number }) => {
  const { language } = useContext(LanguageContext)
  const { path } = useContext(PathContext)

  const [before, setBefore] = useState(path[index - 1])
  const [after, setAfter] = useState(path[index + 1])

  const [starting, setStarting] = useState(false)
  const [middle, setMiddle] = useState(false)
  const [direction, setDirection] = useState<Direction | undefined>()

  useEffect(() => {
    setBefore(path[index - 1])
    setAfter(path[index + 1])
    setStarting(false)
    setMiddle(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  useEffect(() => {
    if (after && !before) setStarting(true)
    if (after && before) setMiddle(true)
  }, [before, after])

  useEffect(() => {
    if (starting) {
      const trigger = getStationTrigger(station, after)
      setDirection(getDirection(trigger, station, after))
    } else if (middle && station.intersecting) {
      const line = getLine(before, after)
      if (!line) {
        const trigger = getStationTrigger(station, after)
        setDirection(getDirection(trigger, station, after))
      }
    } else {
      setDirection(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starting, middle])

  return (
    <Fragment>
      {direction && (
        <Fragment>
          {before && (
            <li className='station' dir={language === 'ARABIC' ? 'rtl' : 'ltr'}>
              <p>
                {language === 'ARABIC'
                  ? station.name.arabic
                  : station.name.english}
              </p>
            </li>
          )}
          <li className='direction' dir={language === 'ARABIC' ? 'rtl' : 'ltr'}>
            <p>
              {language === 'ARABIC'
                ? `إتجاه ${direction.arabic}`
                : `${direction.english} direction`}
            </p>
          </li>
        </Fragment>
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
