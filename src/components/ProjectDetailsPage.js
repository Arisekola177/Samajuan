import React from 'react'

const ProjectDetailsPage = ({project}) => {
  return (
    <div className='lg:w-3/4 font-display px-4 md:mt-32 lg:mt-24 w-full'>
         <h1 className='text-3xl font-bold  '>{project.title}</h1>
         <p className='mt-5'>{project.Desc}</p>
         <p className='mt-5'>{project.Desc2}</p>
         <p className='mt-5'>{project.Desc3}</p>
    </div>
  )
}

export default ProjectDetailsPage