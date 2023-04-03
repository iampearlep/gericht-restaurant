import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-black text-white'>
      <h1>Hello</h1>
      <Outlet />
    </div>
  )
}

export default About
