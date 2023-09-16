import React,{ useEffect, useState } from 'react'
import Homebanner4 from '../assets/images/Homebanner4.jpeg'
import Home4 from '../assets/images/Home4.webp'
import NewHome3 from '../assets/images/NewHome3.jpg'
import { Link } from 'react-router-dom'

const Homebanner = () => {

    const [showDiv, setShowDiv] = useState(false)
    const images = [ Homebanner4, Home4, NewHome3];
    const [currentIndex, setCurrentIndex] = useState(0);
   
    useEffect(() => {
        setTimeout(() => {
          setShowDiv(true);
        }, 1500); 
      }, []);
      
      useEffect(() => {
        const slideInterval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
        return () => {
          clearInterval(slideInterval);
        };
      });
  return (
    <div className='w-full h-screen relative '>
          <div className='w-full h-screen '>
        {images.map((image, index) => (
        <div
          key={index}
          className={`w-full h-screen absolute transition-all duration-500 ease-in-out  ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img className='w-full h-full object-cover filter brightness-50' src={image} alt={`Homebanner ${index}`} />
        </div>
      ))}

        </div>
        
        <div className='absolute  md:top-36 top-20 left-0 font-display px-8'>
            <h1 className= {`lg:text-6xl text-2xl text-white font-bold mb-4 transition-all ease-in-out duration-100  ${showDiv ? 'translate-y-0' : '-translate-y-full'} opacity-100`}>Build Your Dream </h1>
            <h1 className={`lg:text-6xl text-2xl text-white font-bold mb-4 transition-all duration-100 ease-in-out ${showDiv ? 'translate-y-0' : '-translate-y-full'} opacity-100`} >With Passion</h1>
            <p className={`text-white mb-10 transition-all duration-100 ease-in-out ${showDiv ? 'translate-x-0' : '-translate-x-full'} opacity-100`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore
            </p>
            <div className={`border-[1px] border-white rounded-lg w-40 hover:bg-orange-500 transition-all duration-500 ease-in-out ${showDiv ? 'translate-y-0' : '-translate-y-full'} opacity-100`}>
              <Link to='/contact'>
                <button className='text-white py-2 px-6 uppercase '>Get Started</button>
                </Link>
            </div>
           
        </div>
    
      
    </div>
  )
}

export default Homebanner


