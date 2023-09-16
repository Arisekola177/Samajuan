import React from 'react'
import projects from '../assets/data/project'
import ceo from '../assets/images/ceo.jpeg'
import ProjectDetailsInfo from '../components/ProjectDetailsInfo';

import { Link, useParams } from 'react-router-dom';
import ProjectDetailsPage from '../components/ProjectDetailsPage';

const ProjectDetails = () => {
  const { id } = useParams();
  const parsedId = id.toString();
  const project = projects.find((project) => project.id === parsedId); // Convert to string for comparison

  

 
  return (
     <div  className='w-full relative'>
        
        {
            project && <div>
                     <div className='w-full'>
               <img  className="w-full h-64 object-fit" src={ceo} alt='about' />
                 </div>
             <div className='font-display absolute top-20 lg:left-1/3 left-0 px-5 lg:px-0'>
               <h1 className='lg:text-3xl text-xl font-semibold text-white'>Projects</h1>
               <div className='flex lg:gap-4 gap-1 items-center mt-10 text-white'>
               <Link className='lg:text-2xl  text-xl cursor-pointer hover:text-orange-500' to="/">Home</Link>
                <span>-</span>
                <Link className='hover:text-orange-500' to='/projects'>
                <p className='lg:text-2xl text-xl'>Projects</p>
                </Link>
                <span>-</span>
                <p className='lg:text-2xl text-xl'>ProjectDetails</p>
                </div>
                 </div>

                    <div className='mt-10 max-w-screen-lg mx-auto px-4'>
                      <img className='w-full h-96' src={project.image} alt='project' />
                      <div className='w-full flex flex-col mt-5 md:mt-0 md:flex-row md:items-center'>
                        <ProjectDetailsInfo project={project} />
                        <ProjectDetailsPage project={project} />
                        </div>
                      </div>
                </div>

            
          }
  </div>
  )
}

export default ProjectDetails;