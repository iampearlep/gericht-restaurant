import React from 'react'
import AboutImg from '../assets/about-bg.png'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
import Knife from '../assets/knife.png'
import GImg from '../assets/G.png'
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
      } className='text-white'>
        <div>
          <div>
            <h2>About Us</h2>
            <img src={Spoon} alt="" />
            <p>Lorem Ipsum Dolor Sit Amet, 
              Consectetur Adipiscing Elit. 
              Quis Pharetra Adipiscing Ultrices
              Vulputate Posuere Tristique. In Sed 
              Odio Nec Aliquet Eu Proin Mauris Et.</p>
              <button>Know more</button>
          </div>
          <div>
            <img src={GImg} alt="" />
            <img src={Knife} alt="" />
          </div>
          <div>
          <h2>Our History</h2>
            <img src={Spoon} alt="" />
            <p>Lorem Ipsum Dolor Sit Amet, 
              Consectetur Adipiscing Elit. 
              Quis Pharetra Adipiscing Ultrices
              Vulputate Posuere Tristique. In Sed 
              Odio Nec Aliquet Eu Proin Mauris Et.</p>
              <button>Know more</button>
          </div>
          </div>
        </div>
    </section>
  )
}

export default About
