import React from 'react'
import ceo from '../assets/images/ceo.jpeg'
import projects from '../assets/data/project'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <div className='w-full relative'>
         <div className='w-full '>
        <img  className="w-full h-64 object-fit"src={ceo} alt='about' />
      </div>
      <div className='font-display absolute top-20 lg:left-1/3 left-0 px-10 lg:px-0'>
        <h1 className='text-3xl font-semibold text-white'>Projects</h1>
        <div className='flex gap-4 items-center mt-10 text-white'>
          <Link className='text-2xl cursor-pointer hover:text-orange-500' to="/">Home</Link>
          <span>-</span>
          <p className='text-2xl'>Projects</p>
        </div>
      </div>
      <div className='w-full grid-cols-1 px-5 lg:px-0 gap-6 mt-20 lg:w-10/12 lg:mx-auto grid md:grid-cols-3'>
            {
              projects.map((project) => (
                <div className='text-center md:text-start border shadow-md p-4 rounded-md '>
                <img className='w-96 mx-auto md:mx-0 rounded-md cursor-pointer h-64 ' src={project.image} alt='service' />
                <div className='font-display'>
                    <h2 className='text-2xl font-semibold mt-5 mb-5'>{project.title}</h2>
                    <p className=''>{project.shortDesc} </p>
                 
                    <Link  to={`/projects/${project.id}`}>
                        <button className='uppercase mt-5 hover:text-orange-500 hover:underline hover:underline-offset-4'>See More</button>
                     </Link>
                    
                </div>
                 </div>
            
              ))
            }
      </div>
    </div>
  )
}

export default Projects