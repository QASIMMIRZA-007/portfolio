 "use client"
 import React, { useState } from 'react'
import './Nav.css'
import { AiFillBook, AiFillCustomerService, AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import  {  BiMessageAltDetail } from 'react-icons/bi'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div id='Nav'>
      <nav>
 <a      onClick={()=> setActiveNav("#")} className={activeNav === '#' ? "active" : ""} href='#' ><AiOutlineHome/></a>
 <a  className={activeNav === '#about' ? "active " : ""} onClick={()=>setActiveNav('#about')} href='#about'><AiOutlineUser/></a>
 <a  className={activeNav === '#experience' ? 'active' : ""} onClick={()=> setActiveNav('#experience')} href='#experience'><AiFillBook/></a>
 <a  className={activeNav === "#services" ? "active" : ""} onClick={()=> setActiveNav("#services")}   href='#services'><AiFillCustomerService/></a>
 <a  className={ activeNav === '#contact' ? 'active' : ""} onClick={()=> setActiveNav("#contact")} href='#contact'><BiMessageAltDetail/></a>
 </nav>
    </div>
  )
}

export default Nav
