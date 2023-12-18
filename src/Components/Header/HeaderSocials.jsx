import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/qasim-mirza-react-js-enthusiast-4a1860289/' target='_blank'> <BsLinkedin/></a>
      <a href='https://github.com/QasimMirza-developer/QasimMirza-developer' target='_blank' ><BsGithub/></a>
      <a href='https://www.instagram.com/mirza_qasimali/' target='_blank' > <BsInstagram/></a>
    </div>
    
  )
}

export default HeaderSocials
