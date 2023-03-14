import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import InstaImg from '../assets/insta-bg.png'
import Gericht from '../assets/Gerícht.png'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
const Footer = () => {
  return (
    <div style={
        {
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), 
          url(${InstaImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }
      } className='text-white h-[auto]'>
     <div className='pt-96 pb-20 flex flex-col md:flex-row md:space-x-28 px-3 md:w-11/12 space-y-3 justify-center items-center text-center'>
      <div className='flex flex-col space-y-4 justify-center items-center text-lg'>
        <h3 className='text-2xl'>Contact Us</h3>
      <p className='w-2/3'>9 W 53rd St, New York, NY 10019, USA</p>
      <p>+1 212-344-1230</p>
      <p>+1 212-555-1230</p>
      </div>
      <div className=' md:w-2/5 flex flex-col space-y-4 justify-center items-center mx-auto'>
      <img src={Gericht} alt="" />
      <p className='text-xl md:w-2/3'>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.”</p>
      <img className='w-10 mx-auto' src={Spoon} alt="" />
      <div className='flex flex-row space-x-3'>
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      </div>
      </div>
      <div className='flex flex-col space-y-3 text-lg'>
        <h3>Working Hours</h3>
        <p>Monday-Friday:</p>
        <p>08:00 Am -12:00 Am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 Pm</p>
      </div>
     </div>
     <p className='w-1/2 mx-auto text-center pb-6'>2021 Gerícht @alwayspearlxx. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
