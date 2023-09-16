import React from 'react'
import ceo from '../assets/images/ceo.jpeg'

import AboutPage from '../components/AboutPage'
import Aboutbanner from '../components/Aboutbanner'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='w-full relative'>
      <div className='w-full '>
        <img  className="w-full h-64 object-fit" src={ceo} alt='about' />
      </div>
      <div className='font-display absolute top-20 lg:left-1/3 left-0 px-5 lg:px-0'>
        <h1 className='text-3xl font-semibold text-white'>About Us</h1>
        <div className='flex gap-4 items-center mt-10 text-white'>
          <Link className='text-2xl cursor-pointer hover:text-orange-500' to="/">Home</Link>
          <span>-</span>
          <p className='text-2xl'>About Us</p>
        </div>
      </div>
          <AboutPage />
          <Aboutbanner />
    </div>
  )
}

export default About 