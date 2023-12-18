import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kblyc4k', 'template_t5uvo8r', form.current, 'TAuADgAZxVjlyEYgp')
  e.target.reset();

  };
 


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
     <div className='container contact__container'>
<div className='contact__options'>
  <article className='contact__option'>
    <MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>Mirzaq620@gmail.com</h5>
<a href='mailto:Mirzaq620@gmail.com'target='_blank'>Send a message</a>
  </article>
  <article className='contact__option'>
    <RiMessengerLine className='contact__option-icon'/>
<h4>Messenger</h4>
<h5>Qasim Mirza</h5>
<a href='https://m.me/id=100072096265847'target='_blank'>Send a message</a>
  </article>
  <article className='contact__option'>
    <AiOutlineLinkedin className='contact__option-icon'/>
<h4>Linkedin</h4>
<h5>Qasim Mirza</h5>
<a href='https://www.linkedin.com/in/qasim-mirza-react-js-enthusiast-4a1860289/'target='_blank'>Send a message</a>
  </article>

</div>
{/* END OF CONTACT OPTIONS  */}
<form action=' ' onSubmit={sendEmail} ref={form}>
  <input name='name' type='text' placeholder='Your full name' required/>
  <input name='email' type='email' placeholder='Your email address' required/>
  <textarea  rows={7} placeholder='Your message' required/>
  <button type='btn' className='btn btn-primary'  >Send message</button>
</form>
     </div>
    </section>
  )
}

export default Contact
