import React, { useContext, useState, useEffect, Fragment } from 'react'

import { PathContext, LanguageContext, ThemeContext } from '../context'
import { Station as IStation, Direction } from '../interfaces'
import { getStationTrigger, getDirection, getLine } from '../utils'

const Station = ({ station, index }: { station: IStation; index: number }) => {
  const { theme } = useContext(ThemeContext)
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
            <li
              className={`station ${theme}`}
              dir={language === 'ARABIC' ? 'rtl' : 'ltr'}
            >
              <p>
                {language === 'ARABIC'
                  ? station.name.arabic
                  : station.name.english}
              </p>
            </li>
          )}
          <li
            className={`direction ${theme}`}
            dir={language === 'ARABIC' ? 'rtl' : 'ltr'}
          >
            <p>
              {language === 'ARABIC'
                ? `إتجاه ${direction.arabic}`
                : `${direction.english} direction`}
            </p>
          </li>
        </Fragment>
      )}
      <li
        className={`station ${theme}`}
        dir={language === 'ARABIC' ? 'rtl' : 'ltr'}
      >
        <p>
          {language === 'ARABIC' ? station.name.arabic : station.name.english}
        </p>
      </li>
    </Fragment>
  )
}

export default Station
