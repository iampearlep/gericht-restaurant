import React from 'react'
import InstaImg from '../assets/insta-bg.png'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
import ImgCarousel from './ImgCarousel'
const Insta = () => {
  return (
    <div style={
      {
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), 
        url(${InstaImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    } >
     <div className='flex flex-row'>
      <div className='text-white'>
        <h4>Instagram</h4>
        <img src={Spoon} alt="" />
        <h3>Photo Gallery</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className='bg-primary text-black py-2 px-7 text-lg font-semibold'>Know More</button>
      </div>
      <div className='w-2/3'>
        <ImgCarousel />
      </div>
     </div>
    </div>
  )
}

export default Insta
