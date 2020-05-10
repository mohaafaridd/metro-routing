import React, { useContext, useState, useEffect } from 'react'
import Switch from 'react-switch'

import { LanguageContext } from '../context'

const LanguageToggler = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const [toggle, setToggle] = useState(language === 'ARABIC')

  useEffect(() => {
    setToggle(language === 'ARABIC')
  }, [language])

  return (
    <div className='flex justify-end p-2'>
      <Switch
        width={70}
        handleDiameter={30}
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
        onHandleColor='#fff'
        onColor='#00adb5'
        uncheckedIcon={
          <div className='flex justify-center items-center h-full text-white'>
            EN
          </div>
        }
        checkedIcon={
          <div className='flex justify-center items-center h-full text-white'>
            AR
          </div>
        }
        checked={toggle}
        onChange={(checked) => {
          setLanguage(checked ? 'ARABIC' : 'ENGLISH')
          localStorage.setItem('language', checked ? 'ARABIC' : 'ENGLISH')
        }}
      />
    </div>
  )
}

export default LanguageToggler
