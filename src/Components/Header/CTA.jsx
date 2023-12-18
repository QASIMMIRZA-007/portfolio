import React from 'react'
// import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <>
    <div className='CTA'>
      {/* call to action buttons */}
        <a href='./images/cv.pdf' download className='btn'> download CV</a>
        <a href='#contact' className= ' btn btn-primary' > Lets talk</a>
    </div>
      
    </>
  )
}

export default CTA
