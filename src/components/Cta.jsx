import React from 'react'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
const Cta = () => {
  return (
    <div className='bg-primaryBlack h-56 text-center text-white'>
      <div className='flex flex-col justify-center items-center pt-56 z-10'>
      <div className='border-2 border-primary w-11/12 bg-primaryBlack absolute py-12'>
      <h4> Newsletter</h4>
      <img className='mx-auto' src={Spoon} alt="" />
      <h2>Subscribe To Our Newsletter</h2>
      <p>And never miss latest Updates!</p>
      <form>
        <input type="email" name="" id="" />
        <button className='bg-primary text-black py-2 px-7 text-lg font-semibold' placeholder='Email Address'>Subscribe</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Cta
