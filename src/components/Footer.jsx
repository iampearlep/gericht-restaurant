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
      } className='text-white md:h-[auto] '>
     <div className='py-44 flex flex-row space-x-28 w-11/12 justify-center items-center'>
      <div>
        <h3>Contact Us</h3>
      <p>9 W 53rd St, New York, NY 10019, USA</p>
      <p>+1 212-344-1230</p>
      <p>+1 212-555-1230</p>
      </div>
      <div>
      <img src={Gericht} alt="" />
      <p>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.”</p>
      <img src={Spoon} alt="" />
      <div className='flex flex-row'>
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      </div>
      </div>
      <div>
        <h3>Working Hours</h3>
        <p>Monday-Friday:</p>
        <p>08:00 Am -12:00 Am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00am -11:00 Pm</p>
      </div>
     </div>
     <p>2021 Gerícht. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
