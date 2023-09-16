import React from 'react';
import { Link, useParams } from 'react-router-dom';
import services from '../assets/data/services';
import ceo from '../assets/images/ceo.jpeg'
import ServiceLinks from '../components/ServiceLinks';
import ServicePage from '../components/ServicePage';



const ServiceDetails = () => {
  const { id } = useParams();
  const parsedId = id.toString();
  const service = services.find((service) => service.id === parsedId); 

  return (
    <div className='w-full relative'>
          {
            service && <div>
                     <div className='w-full  '>
               <img  className="w-full h-64 object-fit" src={ceo} alt='about' />
                 </div>
             <div className='font-display absolute top-20 lg:left-1/3 left-0 px-5 lg:px-0'>
               <h1 className='lg:text-3xl text-xl font-semibold text-white'>Services</h1>
               <div className='flex lg:gap-4 gap-1 items-center mt-10 text-white'>
               <Link className='lg:text-2xl text-xl cursor-pointer hover:text-orange-500' to="/">Home</Link>
                <span>-</span>
                <Link className='hover:text-orange-500' to='/services'>
                <p className='lg:text-2xl text-xl'>Services</p>
                </Link>
                <span>-</span>
                <p className='lg:text-2xl text-xl'>ServiceDetails</p>
                </div>
                 </div>

                 <div className='lg:mt-10 mt-5 max-w-screen-lg mx-auto'>
                 <img  className='w-full px-2 lg:px-0 h-full lg:h-96 object-cover' src={service.image} alt='service' />
                 <div className='w-full flex flex-col-reverse mt-2 lg:mt-5 md:flex-row md:items-center '>
                   <ServiceLinks  />
                   <ServicePage service={service}   />
                 </div>
                </div>
                </div>

            
          }

    </div>
  );
};

export default ServiceDetails;
