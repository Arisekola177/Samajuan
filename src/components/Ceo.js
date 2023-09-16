import React from 'react'
import ceo from '../assets/images/ceo.jpeg'
import Home2 from '../assets/images/Home2.jpg'

const Ceo = () => {
  return (
    <div className='w-full relative mt-10'>

        <img className='w-full h-96 object-fit ' src={ceo} alt='ceo' />
        <div className='absolute top-20 left-10 text-white'> 
        <div className='font-display mt-5 flex items-center gap-4'>
            <img className='lg:w-48 w-24 rounded-full' src={Home2} alt='ceo' />
            <div className='flex flex-col'>
            <p>Adewale Adedokun</p>
            <span>Founder & Ceo</span>
            </div>
            </div>
            <p className='w-full text-xs md:text-md lg:w-2/3 mt-5'>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos,
             quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam"
            </p>
        </div>
    </div>
  )
}

export default Ceo