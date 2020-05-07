import React, { useContext, Fragment, useState } from 'react'
import Select, { OptionTypeBase, ValueType, ActionMeta } from 'react-select'
import LanguageContext from '../context/language/languageContext'
import useOptions from '../hooks/useOptions'

const Search = () => {
  const [start, setStart] = useState<ValueType<OptionTypeBase>>()
  const [finish, setFinish] = useState<ValueType<OptionTypeBase>>()
  const { language } = useContext(LanguageContext)
  const options = useOptions(language)

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
