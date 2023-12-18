import React from 'react'
import './port.css'
const Porfolio = () => {
  const data = [
    {
      id:1,
      img:"./images/portfolio1.jpg",
      heading:"qasim developer",

    },
    {
      id:2,
      img:"./images/portfolio1.jpg",
      heading:"qasim developer",

    },
    {
      id:3,
      img:"./images/portfolio1.jpg",
      heading:"qasim developer",


    },
    {
      id:4,
      img:"./images/portfolio1.jpg",
      heading:"qasim developer",

    },
    {
      id:4,
      img:"./images/portfolio1.jpg",
      heading:"qasim developer",

    },
    {
      id:4,
      img:"./images/portfolio1.jpg",
      heading:"qasim developer",

    },
  ]
  return (
    <>   
    <section id='portfolio'> 
    <h5>My recent work</h5>
    <h2>Portfolio</h2>
    {/* <div className='container portfolio__container' >
        
            <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src='./images/portfolio1.jpg'/>
        </div>
        <h3>Crypto Currency Dashboard &  Financial Visulization</h3>
      <div className='cta'>
      <a href='https://ketofit-design.netlify.app/' className='btn' target='_blank'>View</a>
        <a  href='https://www.instagram.com/mirza_qasimali/' target='_blank' className='btn btn-primary'> Instagram</a>
      </div>
        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src='./images/portfolio2.jpg'/>
        </div>
        <h3>Charts templates & infoghrapics in figma</h3>
        <div className='cta'>
        <a href='https://www.linkedin.com/in/qasim-mirza/' className='btn' target='_blank'>linkedin</a>
        <a  href='https://www.instagram.com/mirza_qasimali/' target='_blank' className='btn btn-primary'> Instagram</a>
        </div>
        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src='./images/portfolio3.jpg'/>
        </div>
        <h3>Figma Dashboard UI kit for data design web app  </h3>
        <div className='cta'>
        <a href='https://www.linkedin.com/in/qasim-mirza-react-js-enthusiast-4a1860289/' className='btn' target='_blank'>linkedin</a>
        <a  href='https://www.instagram.com/mirza_qasimali/' target='_blank' className='btn btn-primary'> Instagram</a>
        </div>
        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src='./images/portfolio4.jpg'/>
        </div>
        <h3>Charts templates & infoghrapics in figma</h3>
        <div className='cta'>
        <a href='https://www.linkedin.com/in/qasim-mirza-react-js-enthusiast-4a1860289/' className='btn' target='_blank'>linkedin</a>
        <a  href='https://www.instagram.com/mirza_qasimali/' target='_blank' className='btn btn-primary'> Instagram</a></div>
        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src='./images/portfolio5.png'/>
        </div>
        <h3>Miantianing tasks and tracking progress</h3>
        <div className='cta'>
        <a href='https://www.linkedin.com/in/qasim-mirza-react-js-enthusiast-4a1860289/' className='btn' target='_blank'>linkedin</a>
        <a  href='https://www.instagram.com/mirza_qasimali/' target='_blank' className='btn btn-primary'> Instagram</a></div>
        </article>
        <article className='portfolio__item'>
            <div className='portfolio__item-img'>
              <img src='./images/portfolio6.jpg'/>
        </div>
        <h3>Mainting mobile friendly apps</h3>
        <div className='cta'>
        <a href='https://www.linkedin.com/in/qasim-mirza-react-js-enthusiast-4a1860289/' className='btn' target='_blank'>linkedin</a>
        <a  href='https://www.instagram.com/mirza_qasimali/' target='_blank' className='btn btn-primary'> Instagram</a></div>
        </article>

    </div>
     */}
     <div className='container portfolio__container'>
      {data.map((item) => {
        return(
          <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={item.img}/>
            
      </div>
      <h3>{item.heading}</h3>
    <div className='cta'>
    <a href='https://ketofit-design.netlify.app/' className='btn' target='_blank'>View</a>
      <a  href='https://www.linkedin.com/in/qasim-mirza-4a1860289/' target='_blank' className='btn btn-primary'> LinkedIn</a>
    </div>
      </article>
        )
      })}
    
     </div>
    </section>
      
    </>
  )
}

export default Porfolio
