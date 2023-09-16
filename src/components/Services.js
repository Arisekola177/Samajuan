import React from 'react';
import Home4 from '../assets/images/Home4.webp'
import { Link } from 'react-router-dom';
import NewHome5 from '../assets/images/NewHome5.jpg'
import banner from '../assets/images/banner.webp'

const Services = () => {
  
 
  return (
    <div className='w-full mt-10'>
       <div className='w-11/12 mx-auto'>
        <h1 className='font-display lg:text-4xl text-2xl text-center font-semibold text-orange-500'>Our Services</h1>
        <div className='w-full mt-20 lg:w-11/12 lg:mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6'>
       
            
              <div  className='text-center md:text-start'>
                <img className='lg:w-96 md:w-72 mx-auto md:mx-0 rounded-md cursor-pointer h-64' src={Home4} alt='service' />
                <div className='font-display'>
                  <h2 className='text-2xl font-semibold mt-5 mb-5'>Construction</h2>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore</p>
                
                </div>
              </div>
              <div  className='text-center md:text-start'>
                <img className='lg:w-96 md:w-72 mx-auto md:mx-0 rounded-md cursor-pointer h-64' src={banner} alt='service' />
                <div className='font-display'>
                  <h2 className='text-2xl font-semibold mt-5 mb-5'>House Remodel</h2>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore</p>
     
                </div>
              </div>
              <div  className='text-center md:text-start'>
                <img className='lg:w-96 md:w-72 mx-auto md:mx-0 rounded-md cursor-pointer h-64' src={NewHome5} alt='service' />
                <div className='font-display'>
                  <h2 className='text-2xl font-semibold mt-5 mb-5'>Survey Plan</h2>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore</p>
              
                </div>
              </div>
            
              <Link className='block uppercase mt-5 hover:text-orange-500 hover:underline hover:underline-offset-4' to='/services'>Read More</Link>
         
        </div>
      </div>
      <p className='w-10/12 mx-auto mt-10 border-[2px] border-b border-orange-500 shadow-lg'></p>
    </div>
  );
}

export default Services;
