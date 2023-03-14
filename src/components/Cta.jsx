import React from 'react'
import Rounded from '../assets/rounded.png'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
const Cta = () => {
  return (
    <div className='bg-primaryBlack h-72 text-center text-white'>
       <img className='w-24 absolute ml-32 mt-10 z-10' src={Rounded} alt="" />
      <div className='flex flex-col justify-center items-center pt-80 z-10'>
      <div className='border-2 border-primary w-11/12 bg-primaryBlack absolute py-16'>
      <h4 className='text-2xl font-semibold'> Newsletter</h4>
      <img className='mx-auto' src={Spoon} alt="" />
      <h2 className='text-4xl md:text-7xl text-primary font-semibold my-4'>Subscribe To Our Newsletter</h2>
      <p className='my-12 text-lg text-primaryGrey'>And never miss latest Updates!</p>
      <form className='flex flex-row space-x-5 justify-center items-center'>
        <input className='bg-primaryBlack border-2 border-primaryGrey w-6/12 py-3 px-3 text-primaryGrey' placeholder='Email Address' type="email" name="" id="" />
        <button className='bg-primary text-black py-3 px-7 text-lg font-semibold'>Subscribe</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Cta
