import React from 'react'
import './About.css'
import {BsAward } from 'react-icons/bs'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {VscFolder} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
    <h5> Get to know</h5>
    <h2>About me</h2>
    <div className='container about__container'>
    <div className='about__me'>
<div className='about__me-img'>
  <img src='./images/qasim.jpg' alt='about__image' className='about__card-img'/>
</div>
    </div>
    <div className='about__content'>
      <div className='about__cards'>
           <article className='about__card'>
           <BsAward className='about__card-icon'/>
           <h5>Experience</h5>
           <small>2+ Years </small>
           </article>

           <article className='about__card'>
           < AiOutlineUsergroupAdd className='about__card-icon'/>
           <h5>Clients</h5>
           <small>200+ Worldwide</small>
           </article>

           <article className='about__card'>
           <VscFolder className='about__card-icon'/>
           <h5>Project</h5>
           <small>50+ completed </small>
           </article>
</div>
<p>
I am a passionate frontend developer dedicated to crafting immersive and user-friendly web experiences. With a keen eye for design and a commitment to clean, efficient code, I bring ideas to life on the web. 

</p>
<a href='#contact' className='btn btn-primary' >Lets talk</a>
</div>
    </div>
    </section>
  )
}

export default About
