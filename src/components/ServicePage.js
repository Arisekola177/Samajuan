import React from 'react'

const ServicePage = ({service}) => {
   
  return (
    <div className='mt-10 mb-10 md:mb-0'>
        
        <div className='mt-5 font-display w-full lg:w-2/3 px-4'>
            <h1 className='text-2xl font-semibold'>{service.title }</h1>
            <p className='mt-5'>{service.Desc}</p>
        </div>
        <div className='font-display text-center md:text-start px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4'>
            <div>
               <h2 className='mb-2 font-semibold text-xl lg:text-2xl'> {service.subhead}</h2>
                <p className='lg:w-80 md:w-60  w-full'>{service.subheads}</p> 
            </div>
            <div>
               <h2 className='mb-2 font-semibold text-xl lg:text-2xl'> {service.subhead2}</h2>
                <p className='lg:w-80 md:w-60 w-full '>{service.subheads}</p> 
            </div>
            <div>
               <h2 className='mb-2 font-semibold text-xl lg:text-2xl'> {service.subhead3}</h2>
                <p className='lg:w-80 md:w-60 w-full '>{service.subheads}</p> 
            </div>
            <div>
               <h2 className='mb-2 font-semibold  text-xl lg:text-2xl'> {service.subhead4}</h2>
                <p className='lg:w-80 md:w-60 w-full'>{service.subheads}</p> 
            </div>
        </div>
    </div>
  )
}

export default ServicePage