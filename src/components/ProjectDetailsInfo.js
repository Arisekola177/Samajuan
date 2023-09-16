import React from 'react'

const ProjectDetailsInfo = ({project}) => {
  return (
    <div className='border mb-5 md:mb-0 mx-0 lg:mx-8 py-5 px-4 md:w-3/6  shadow-md font-display bg-black w-full ' >
                  <h1 className='text-2xl font-semibold text-white'>Project Information</h1>
                  <div className='text-white flex items-center gap-5 mt-5'>
                      <h2 className='font-bold'>Client:</h2>
                      <p className='font-bold md:text-xs'>{project.Client}</p>
                  </div>
                  <p className='border-b border-slate-800 mt-4'></p>
                  <div className='text-white flex items-center gap-5 mt-5'>
                      <h2  className='font-bold'>Location:</h2>
                      <p  className='font-bold'>{project.location}</p>
                  </div>
                  <p className='border-b border-slate-800 mt-4'></p>
                  <div className='text-white flex items-center gap-5 mt-5'>
                      <h2  className='font-bold'>Area:</h2>
                      <p  className='font-bold'>{project.Area}</p>
                  </div>
                  <p className='border-b border-slate-800 mt-4'></p>
                  <div className='text-white flex items-center gap-5 mt-5'>
                      <h2  className='font-bold'>Year:</h2>
                      <p  className='font-bold'>{project.Year}</p>
                  </div>
                  <p className='border-b border-slate-800 mt-4'></p>
                  <div className='text-white flex items-center gap-5 mt-5'>
                      <h2  className='font-bold'>Budget:</h2>
                      <p  className='font-bold'>{project.Budget}</p>
                  </div>
    </div>
  )
}

export default ProjectDetailsInfo