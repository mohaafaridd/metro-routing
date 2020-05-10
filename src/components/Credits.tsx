import React, { useContext } from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { ThemeContext } from '../context'

const Credits = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer id='contact' className={theme}>
      <div id='contacts-list'>
        <a href='https://twitter.com/mohaafaridd'>
          <FaTwitter size={20} />
        </a>
        <a href='https://www.facebook.com/mohaafaridd/'>
          <FaFacebookF size={20} />
        </a>
        <a href='https://github.com/Mohammed-Farid'>
          <FaGithub size={20} />
        </a>
        <a href='https://www.linkedin.com/in/mohamedkhamis8/'>
          <FaLinkedinIn size={20} />
        </a>
      </div>

      <p id='copyright'>
        Copyright <strong>Mohammed Farid</strong>. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Credits
