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
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), 
          url(${AboutImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
        }
      } className='text-white relative'>
        <div className='absolute z-10 mt-24'>
         <div className='flex flex-col md:flex-row md:w-11/12 justify-center items-center mx-auto'>
         <div className='flex flex-col items-end text-right'>
            <h2 className='text-primary text-6xl font-semibold'>About Us</h2>
            <img src={Spoon} alt="" />
            <p className='my-12'>Lorem Ipsum Dolor Sit Amet, 
              Consectetur Adipiscing Elit. 
              Quis Pharetra Adipiscing Ultrices
              Vulputate Posuere Tristique. In Sed 
              Odio Nec Aliquet Eu Proin Mauris Et.</p>
              <button className='bg-primary text-black py-3 px-7 text-lg font-semibold'>Know More</button>
          </div>
          <div className='w-1/2 flex justify-center items-center'>
            <img className='' src={Knife} alt="" />
          </div>
          <div className='flex flex-col items-start text-left'>
          <h2 className='text-primary text-6xl font-semibold'>Our History</h2>
            <img src={Spoon} alt="" />
            <p className='my-12'>Lorem Ipsum Dolor Sit Amet, 
              Consectetur Adipiscing Elit. 
              Quis Pharetra Adipiscing Ultrices
              Vulputate Posuere Tristique. In Sed 
              Odio Nec Aliquet Eu Proin Mauris Et.</p>
              <button className='bg-primary text-black py-3 px-7 text-lg font-semibold'>Know More</button>
          </div>
         </div>
          </div>
          <div className='relative flex w-2/6 mx-auto py-56'>
         <img className='brightness-75'  src={GImg} alt="" />
         </div>
        </div>
    </section>
  )
}

export default About
