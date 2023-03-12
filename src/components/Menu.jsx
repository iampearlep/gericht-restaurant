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
    <div>
      <h4>{wine.name}</h4>
      <hr />
      <p>{wine.price}</p>
      <p>{wine.type}</p>
    </div>
  )
})
const cocktails = cocktailData.map((cocktail) => {
  return (
    <div>
      <h4>{cocktail.name}</h4>
      <hr />
      <p>{cocktail.price}</p>
      <p>{cocktail.type}</p>
    </div>
  )
})
  return (
    <div className='bg-primaryBlack text-white'>
      <div>
      <h3>Menu That Fits You Palatte</h3>
      <img src={Spoon} alt="" />
      <h2>Today's Special</h2>
      </div>
       <div>
       {/* <div>
          <h3></h3>
          <div>
          <div>
            <h4></h4>
            <hr />
            <p></p>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          </div>
          <div>
          <div>
            <h4></h4>
            <hr />
            <p></p>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          </div>
          <div>
          <div>
            <h4></h4>
            <hr />
            <p></p>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          </div>
          <div>
          <div>
            <h4></h4>
            <hr />
            <p></p>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          </div>
          <div>
          <div>
            <h4></h4>
            <hr />
            <p></p>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          </div>
        </div> */}
        <div>
          {wines}
        </div>
        <div>
          <img src={cocktailShaker} alt="" />
        </div>
        <div>
          {cocktails}
        </div>
      </div>
      <button className='bg-primary text-black py-3 px-7 text-lg font-semibold'>View More</button>
    </div>
  )
}

export default Menu
