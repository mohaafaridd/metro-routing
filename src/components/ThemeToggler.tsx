import React, { useContext, useState, useEffect } from 'react'
import Switch from 'react-switch'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'

import { ThemeContext } from '../context'

const ThemeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [toggle, setToggle] = useState(theme === 'dark')

  useEffect(() => {
    setToggle(theme === 'dark')
  }, [theme])

  return (
    <div className='flex self-end p-2'>
      <Switch
        width={70}
        handleDiameter={30}
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
        onHandleColor='#fff'
        onColor='#00adb5'
        uncheckedIcon={
          <div className='flex justify-center items-center h-full'>
            <RiSunLine className='text-yellow-300' />
          </div>
        }
        checkedIcon={
          <div className='flex justify-center items-center h-full'>
            <RiMoonLine className='text-white' />
          </div>
        }
        checked={toggle}
        onChange={(checked) => {
          setTheme(checked ? 'dark' : 'light')
          localStorage.setItem('theme', checked ? 'dark' : 'light')
        }}
      />
    </div>
  )
}

export default ThemeToggler
