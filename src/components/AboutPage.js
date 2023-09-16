import React from 'react'
import Homebanner4 from '../assets/images/Homebanner4.jpeg'
import { Link } from 'react-router-dom'
const AboutPage = () => {
  return (
    <div>
         <div className='w-10/12 mx-auto mt-20 flex flex-col md:flex-row md:justify-between gap-10 md:items-center'>
        <div className='w-full md:w-2/4'>
        <img className='lg:h-96  h-full' src={Homebanner4} alt='about' />
        </div>
              <div className='w-full md:w-2/4 font-display'>
                  <h2 className='text-xl font-bold text-black mb-5'>Welcome to Samajuan</h2>
                  <p className='mv-5 font-extrabold text-2xl mb-5'>20 Years Of Experience In Industry</p>
                  <p className='mb-5 font-semibold'>We are ready to build your dream home!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, 
                    voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio
                     repudiandae quia quam quos, quas illo, iusto,
                     necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam</p>
                     <div className='mt-5 w-40 bg-orange-500 hover:bg-black'>
                      <Link to='/services'>
                      <button className='uppercase text-white py-2 px-4'>Our Services</button>
                      </Link>
                     </div>
              </div>
      </div>
    </div>
  )
}

export default AboutPage