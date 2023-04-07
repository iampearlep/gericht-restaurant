import React from 'react'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
import cocktailShaker from '../assets/cocktail-shaker.png'
const Menu = () => {
  const wineData = [
    {
      id: 1,
      name: 'Chapel Hill Shiraz',
      price: '$56',
      type: 'AU | Bottle'
  },
    {
      id: 2,
      name: 'Catena Malbec',
      price: '$59',
      type: 'AR | Bottle'
  },
    {
      id: 3,
      name: 'La Vieille Rosé',
      price: '$44',
      type: 'FR | 750 ml'
  },
    {
      id: 4,
      name: 'Rhino Pale Ale',
      price: '$31',
      type: 'CA | 750 ml'
  },
    {
      id: 5,
      name: 'Irish Guinness',
      price: '$26',
      type: 'IE | 750ml'
  }
]
const cocktailData = [
  {
    id: 1,
    name: 'Aperol Spritz',
    price: '$20',
    type: 'Aperol | Villa Marchesi prosecco | soda | 30ml'
},
  {
    id: 2,
    name: `Dark 'N' Stormy`,
    price: '$16',
    type: 'Dark rum | Ginger beer | Slice of lime'
},
  {
    id: 3,
    name: 'Daiquiri',
    price: '$10',
    type: 'Rum | Citrus juice | Sugar'
},
  {
    id: 4,
    name: 'Old Fashioned',
    price: '$31',
    type: 'Bourbon | Brown sugar | Angostura Bitters'
},
  {
    id: 5,
    name: 'Negroni',
    price: '$26',
    type: 'Gin | Sweet Vermouth | Campari | Orange garnish'
}
]

const wines = wineData.map((wine) => {
  return (
    <div key={wine.id} className='flex flex-col mb-10'>
     <div className='flex flex-row items-center space-x-3'>
     <h4 className='text-2xl font-semibold text-primary'>{wine.name}</h4>
      <hr className='w-2/5' />
      <p className='text-xl font-semibold'>{wine.price}</p>
     </div>
      <p className='text-lg font-semibold text-primaryGrey'>{wine.type}</p>
    </div>
  )
})
const cocktails = cocktailData.map((cocktail) => {
  return (
    <div key={cocktail.id} className='flex flex-col mb-10'>
      <div className='flex flex-row items-center space-x-3'>
      <h4 className='text-2xl font-semibold text-primary'>{cocktail.name}</h4>
      <hr className='w-2/5' />
      <p className='text-xl font-semibold'>{cocktail.price}</p>
      </div>
      <p className='text-lg font-semibold text-primaryGrey'>{cocktail.type}</p>
    </div>
  )
})
  return (
    <div className='bg-primaryBlack text-white py-10'>
      <div className='flex flex-col justify-center items-center text-center mx-auto md:w-1/2 py-20'>
      <h3 className='text-xl md:text-2xl font-semibold'>Menu That Fits You Palatte</h3>
      <img className='w-12' src={Spoon} alt="" />
      <h2 className='mt-2 md:mt-10 text-5xl md:text-6xl text-primary font-semibold mb-10 md:mb-0'>Today's Special</h2>
      </div>
       <div className='flex flex-col md:flex-row w-11/12 md:w-full md:px-6 justify-center items-center mx-auto space-y-12'>
        <div className='w-11/12 md:w-2/5 -mt-14'>
          <h3 className='text-4xl md:text-5xl font-semibold text-center mb-14'>Wine & Beer</h3>
          {wines}
        </div>
        <div className='w-11/12 md:w-1/2 flex justify-center items-center'>
          <img src={cocktailShaker} alt="" />
        </div>
        <div className='w-11/12 md:w-2/5 md:-mt-14'>
          <h3 className='text-4xl md:text-5xl font-semibold text-center mb-14'>Cocktails</h3>
          {cocktails}
        </div>
      </div>
    <div className='my-16 w-1/2 mx-auto text-center'>
    <button className='bg-primary text-black py-2 px-7 text-lg font-semibold'>View More</button>
    </div>
    </div>
  )
}

export default Menu
