import React from 'react'
import { FaCubes } from 'react-icons/fa'

const Aboutbanner = () => {
  return (
    <div className='w-full bg-slate-100 mt-20'>
        <div className='w-full px-10 md:px-0 md:w-10/12 md:mx-auto grid md:grid-cols-3 gap-4 py-20 font-display'>
             <div>
               <div className='flex  gap-2 items-center'>
                  <FaCubes className='text-3xl' />
               <h1 className='font-extrabold mb-5 text-2xl mt-3'>Top Rated</h1>
               </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore</p>
             </div>
             <div>
               <div className='flex items-center gap-2'>
               <FaCubes className='text-3xl' />
               <h1  className='font-extrabold mb-5 text-2xl mt-3'>Best Quality</h1>
               </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore</p>
             </div>
             <div>
               <div className='flex items-center gap-2'>
               <FaCubes className='text-3xl' />
               <h1  className='font-extrabold mb-5 text-2xl mt-3'>Low Cost</h1>
               </div>
              
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore</p>
             </div>
        </div>
    </div>
  )
}

export default Aboutbanner