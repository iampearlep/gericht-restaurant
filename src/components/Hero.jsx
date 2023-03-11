import React from 'react'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
import HeroImg from '../assets/hero.png'
const Hero = () => {
  return (
    <main>
      <div className='bg-black text-slate-50 flex flex-col md:flex-row px-10 space-x-24 py-16 '>
      <div className='w-2/5 mt-20'>
      <h4 className='text-2xl font-semibold'>Chase The New Flavour</h4>
      <img src={Spoon} alt="" />
      <h1 className='mt-14 text-7xl text-primary font-bold w-11/12 mb-7'>THE KEY TO FINE DINING</h1>
      <p className='mb-6'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button className='bg-primary text-black py-3 px-5 font-semibold'>Explore Menu</button>
      </div>
      <div className='w-1/2'>
        <img src={HeroImg} alt="" />
      </div>
    </div>
    </main>
  )
}

export default Hero
