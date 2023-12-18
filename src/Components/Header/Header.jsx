import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
 
// import ME from '../../assets/me.png'

const Header = () => {

  return (
    <>
    <header>
<div className='container header__container '>
  <h5>Hello I'm</h5>
  <h1>Qasim Mirza</h1>
  <h5>Full Stack developer</h5>
<CTA/>
<HeaderSocials/>
<div className='mine-img'>
 <img src='./images/qasim-rbg.png' alt='mine image' />
 
</div>

<a href='#contact' className='scroll__down'>scroll down</a>

</div>



    </header>
     
    </>
  )
}

export default Header
