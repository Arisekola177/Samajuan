import React from 'react'

import Home4 from '../assets/images/Home4.webp'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='w-full mt-10'>
        <h1 className='font-display  text-2xl lg:text-4xl text-center text-orange-500 font-bold'>Latest Projects</h1>
        <div className='w-10/12 mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10 mt-10'>
                <div>
                    <img className='w-96 rounded-md' src={Home4} alt='project' />
                </div>
                <div className='font-display'>
                    <h1 className='text-6xl text-gray-500 font-extrabold mb-4'>01</h1>
                    <h2 className='text-2xl font-bold'> Residential</h2>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore</p>
                    <div className='mt-8'>
                    <Link  to='/projects'>
                        <button className='uppercase text-orange-500 underline hover:text-black'>Read More</button>
                      </Link>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Projects