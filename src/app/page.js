"use client"
import React from 'react'
import Header from '@/Components/Header/Header'
import Nav from '@/Components/Nav/Nav'
import About from '@/Components/About/About'
import Experience from '@/Components/Experience/Experience'
import Port from '@/Components/Port/Port'
import Testimonial from '@/Components/Testimonials/Testimonial'
import Contact from '@/Components/Contacts/Contact'
import Footer from '@/Components/Footer/Footer'
const page = () => {
  return (
    <>
<Header/>
<Nav/>
<About/>
<Experience/>
<Port/>
<Testimonial/>
<Contact/>
<Footer/>
    </>
  )
}

export default page
