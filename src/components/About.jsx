import React from 'react'
import AboutImg from '../assets/about-bg.png'
const About = () => {
  return (
    <section>
      <div style={
        {
          backgroundImage:`url(${AboutImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }
      }>
        <h1 className='text-white'>Hiiiii</h1>
      </div>
    </section>
  )
}

export default About
