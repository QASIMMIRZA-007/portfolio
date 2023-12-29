import React from 'react'
import './Footer.css'
import styles from './footer.module.scss'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
   
    <footer className={styles['footer']}>
      <a className={styles['footer__logo']}>QASIM MIRZA</a>
      <ul className={styles['footer__links']}>
        <li><a href='#'>Home</a>  </li>
        <li><a href='#about'>about</a>  </li>
        <li><a href='#experience'>Experience</a>  </li>
        <li><a href='#Port'>Portfolio</a>  </li>
        <li><a href='#testimonial'>Testimonial</a>  </li>
        <li><a href='#contact'>Contact</a>  </li>
      </ul>
      <div className={styles['footer__social-links']}>
      <a href='https://www.linkedin.com/in/qasim-mirza-4a1860289/' target='_blank'> <BsLinkedin/></a>
      <a href='https://github.com/QasimMirza-developer/QasimMirza-developer' target='_blank' ><BsGithub/></a>
      <a href='https://www.instagram.com/mirza_qasimali/' target='_blank' > <BsInstagram/></a>
      </div>
      <div className={styles['footer__copyright']}>
        <small>&copy; MIRZA QASIM - All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
