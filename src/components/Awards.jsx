import React from 'react'
import AboutImg from '../assets/insta-bg.png'
import AwardImg from '../assets/Group-43.png'
import Spoon from '../assets/spoon.d079f43fbcf509908d3865293080795a.svg'
import Rounded from '../assets/rounded.png'
import Img from '../assets/award-1.svg'
const Awards = () => {
  const awardData =[
    {
      id: 1,
      image: '../assets/award-2.svg',
      name:  'Bib Gourmond',
      text: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      id: 2,
      image: '../assets/award-1.svg',
      name:  'Rising Star',
      text: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      id: 3,
      image: '../assets/award-5.svg',
      name:  'AA Hospitality',
      text: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      id: 4,
      image: '../assets/award-3.svg',
      name:  'Outstanding Chef',
      text: 'Lorem ipsum dolor sit amet, consectetur.'
    },
  ]
  const awards = awardData.map((award) => {
    return (
      <div key={award.id} className='flex flex-row items-center space-x-6 my-10'>
        <img src={Img} alt="" />
        <div>
          <h4 className='text-2xl text-primary font-semibold'>{award.name}</h4>
          <p className='text-xl'>{award.text}</p>
        </div>
      </div>
    )
  })
  return (
    <div  style={
      {
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), 
        url(${AboutImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    } className='text-white relative md:h-[auto] overflow-hidden'>
    <div className='flex flex-col md:flex-row py-24 px-8 md:px-16'>
      <img className='w-24 absolute -ml-6 -mt-14 md:-ml-14 md:-mt-10' src={Rounded} alt="" />
    <div className='md:w-1/2 px-4'>
      <div className='mb-6'>
      <h3 className='text-2xl font-semibold mb-2'>Awards & Recognition</h3>
      <img className='' src={Spoon} alt="" />
      </div>
      <h2 className='text-6xl font-semibold text-primary'>Our Laurels</h2>
    <div className='mt-16'>
    {awards}
    </div>
    </div>
    <div className='md:w-1/2'>
    <img className='mt-5 md:mt-16' src={AwardImg} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Awards
