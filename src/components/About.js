import React from 'react'
import service from '../assets/images/Service.jpeg'

const About = () => {
  return (
    <div className='w-full mt-14'>
        <div className='w-10/12 mx-auto flex flex-col md:flex-row md:justify-between items-center gap-10 mt-10'>
             <div className='w-full md:w-2/4 font-display '>
             <h1 className=' text-start text-2xl font-semibold text-orange-500'>About us</h1>
                <p className='mt-5 font-bold text-2xl lg:text-3xl w-96'>We are the best construction company in Africa</p>
                <p className='mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore </p>
                <div className='mt-5 bg-orange-500 rounded-lg w-40 hover:bg-black'>
                    <button className='py-2 px-6 uppercase hover:text-white'>Contact us</button>
                </div>
             </div>
             <div className='w-full md:w-2/4 border-r-4 border-b-4 border-orange-500'>
                 <img className='w-full ' src={service} alt='ceo' />
                
             </div>
        </div>
    </div>
  )
}

export default About