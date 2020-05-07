import React, { useContext, Fragment, useState, useEffect } from 'react'
import Select, { OptionTypeBase, ValueType, ActionMeta } from 'react-select'
import LanguageContext from '../context/language/languageContext'
import PathContext from '../context/path/pathContext'
import useOptions from '../hooks/useOptions'
import { getShortestPath } from '../utils/getShortestPath'
import generateMap from '../database/map'
import { getStation } from '../utils/getStation'

type OptionType = { label: string; value: string }

const Search = () => {
  const { language } = useContext(LanguageContext)
  const { setPath, setWeight } = useContext(PathContext)
  const [start, setStart] = useState<ValueType<OptionTypeBase>>()
  const [finish, setFinish] = useState<ValueType<OptionTypeBase>>()
  const options = useOptions(language)

  useEffect(() => {
    if (start && finish) {
      const map = generateMap()
      const startValue = (start as OptionType).value
      const finishValue = (finish as OptionType).value
      const shortestPath = getShortestPath(map, startValue, finishValue)
      const weight = +shortestPath[shortestPath.length - 1]
      const path = shortestPath.map((key) => getStation(key))

      setPath(path)
      setWeight(weight)
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

  return (
    <Fragment>
      <Select
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
    </Fragment>
  )
}

export default Search
