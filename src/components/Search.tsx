import React, { useContext, useState, useEffect } from 'react'
import Select, { OptionTypeBase, ValueType, ActionMeta } from 'react-select'
import { useQueryParam, StringParam } from 'use-query-params'
import { FaExchangeAlt } from 'react-icons/fa'

import LanguageContext from '../context/language/languageContext'
import PathContext from '../context/path/pathContext'
import useOptions from '../hooks/useOptions'
import { getShortestPath } from '../utils/getShortestPath'
import generateMap from '../database/map'
import { getStation } from '../utils/getStation'
import { Station } from '../interfaces/station'
import ThemeContext from '../context/theme/themeContext'

type OptionType = { label: string; value: string }

const Search = () => {
  const { theme } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const { setPath, setWeight } = useContext(PathContext)
  const [source, setSource] = useQueryParam('source', StringParam)
  const [destination, setDestination] = useQueryParam(
    'destination',
    StringParam
  )

  const [start, setStart] = useState<ValueType<OptionTypeBase>>()
  const [finish, setFinish] = useState<ValueType<OptionTypeBase>>()
  const options = useOptions(language)

  useEffect(() => {
    if (source) {
      const line = options.find((i) =>
        i.options.find((j) => j.value === source)
      )
      const station = line?.options.find((i) => i.value === source)
      setStart(station)
    }
    if (destination) {
      const line = options.find((i) =>
        i.options.find((j) => j.value === destination)
      )
      const station = line?.options.find((i) => i.value === destination)
      setFinish(station)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (start) setSource((start as OptionType).value)
    if (finish) setDestination((finish as OptionType).value)

    if (start && finish) {
      const map = generateMap()
      const startValue = (start as OptionType).value
      const finishValue = (finish as OptionType).value
      const shortestPath = getShortestPath(map, startValue, finishValue)
      const path = shortestPath
        .map((key) => getStation(key))
        .filter((station) => station !== undefined)

      setPath(path as Station[])
      setWeight(path.length)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, finish])

  const onChange = (
    value: ValueType<OptionTypeBase>,
    actionMeta: ActionMeta<OptionTypeBase>
  ) => {
    if (actionMeta.name === 'start') setStart(value)
    else setFinish(value)
  }

  const onSwitch = () => {
    const startValue = start
    setStart(finish)
    setFinish(startValue)
  }

  return (
    <div id='search-box' className={theme}>
      <h1 className='text-gray-900' dir={language === 'ARABIC' ? 'rtl' : 'ltr'}>
        {language === 'ARABIC'
          ? 'دليل خطوط المترو المصرية'
          : 'Egyptian Metro Guidelines'}
      </h1>

      <Select
        noOptionsMessage={(obj) => {
          return language === 'ARABIC'
            ? 'تعذر إيجاد المحطة'
            : 'No station was found'
        }}
        className='select'
        placeholder={
          language === 'ARABIC'
            ? 'من فضلك اختر محطة البداية'
            : 'Please choose the starting station'
        }
        name='start'
        value={start}
        onChange={onChange}
        options={options}
        isRtl={language === 'ARABIC'}
      />
      <Select
        noOptionsMessage={(obj) => {
          return language === 'ARABIC'
            ? 'تعذر إيجاد المحطة'
            : 'No station was found'
        }}
        className='select'
        placeholder={
          language === 'ARABIC'
            ? 'من فضلك اختر المحطة المرجو الوصول إليها'
            : 'Please choose the destination'
        }
        name='finish'
        value={finish}
        onChange={onChange}
        options={options}
        isRtl={language === 'ARABIC'}
      />

      <button onClick={onSwitch}>
        <FaExchangeAlt />
      </button>
    </div>
  )
}

export default Search
