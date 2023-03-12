import React from 'react'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
import HeroImg from '../assets/hero.png'
const Hero = () => {
  return (
    <main>
      <div className='bg-black text-slate-50 flex flex-col md:flex-row px-10 md:space-x-24 space-y-8 py-16 '>
      <div className='w-11/12 md:w-2/5 md:mt-20'>
      <h4 className='text-2xl font-semibold'>Chase The New Flavour</h4>
      <img src={Spoon} alt="" />
      <h1 className='mt-5 md:mt-10 text-6xl md:text-8xl text-primary font-bold w-full mb-7'>The Key To Fine Dining</h1>
      <p className='mb-6'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button className='bg-primary text-black py-3 px-5 font-semibold'>Explore Menu</button>
      </div>
      <div className='w-full md:w-1/2 mx-auto'>
        <img className='' src={HeroImg} alt="" />
      </div>
    </div>
    </main>
  )
}

export default Hero
