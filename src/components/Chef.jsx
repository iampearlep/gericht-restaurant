import React from 'react'
import ChefImg from '../assets/chef-img.png'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
import Sign from '../assets/sign.9bf0bd90ad4caa17991f.png'
import CommImg from '../assets/download (6).png'
import AboutImg from '../assets/about-bg.png'
const Chef = () => {
  return (
    <div style={
      {
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), 
        url(${AboutImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    } className='relative h-[auto]'>
      <div className='flex flex-col md:flex-row text-white py-32 w-11/12 justify-center items-center mx-auto space-x-10'>
        <div className='w-1/2'>
        <img src={ChefImg} alt="" />
        </div>
        <div className='w-1/2'>
          <h3>Chef’s Word</h3>
          <img src={Spoon} alt="" />
          <h2>What We Believe In</h2>
         
          <div className='my-20 flex flex-row'> 
          <img className='absolute w-10' src={CommImg} alt="" />
          <p className='w-11/12 ml-auto text-xl'>Lorem Ipsum Dolor Sit Amet, 
            Consectetur Adipiscing Elit Auctor Sit Auctor 
            Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris
            Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat,
            Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p></div>
            <h3>Kevin Luo</h3>
            <p>Chef & Founder</p>
            <img src={Sign} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chef
