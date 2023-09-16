import React from 'react'
import { FaBuilding } from 'react-icons/fa';

import { Link } from 'react-router-dom';
const ServiceLinks = () => {
  return (
    <div>
          <div className='border md:mx-8 mx-0  py-5 px-4 w-full md:w-80 shadow-md bg-slate-100 font-display'>
                            <h1 className='text-2xl'>Services</h1>
                             <div className='mt-10 flex flex-col gap-5'>
                                <div >
                                <Link className='flex items-center gap-5 hover:text-orange-500' to='/services/01'>
                                <FaBuilding />
                                <p className='semibold'>Construction</p>
                                </Link>
                                <p className='border-b-[2px] mt-4 '></p>
                                </div>
                                <div>
                                <Link className='flex items-center gap-5 hover:text-orange-500' to='/services/02'>
                                <FaBuilding />
                                <p className='semibold'>House Remodel</p>
                                </Link>
                                <p className='border-b-[2px] mt-4 '></p>
                                </div>
                                <div>
                                <Link className='flex items-center gap-5 hover:text-orange-500' to='/services/03'>
                                <FaBuilding />
                                <p className='semibold'>Interior Design</p>
                                </Link>
                                <p className='border-b-[2px] mt-4 '></p>
                                </div>
                                <div>
                                <Link  className='flex items-center gap-5 hover:text-orange-500' to='/services/04'>
                                <FaBuilding />
                                <p className='semibold'>Floor & Roof</p>
                                </Link>
                                <p className='border-b-[2px] mt-4 '></p>
                                </div>
                                <div>
                                <Link className='flex items-center gap-5 hover:text-orange-500' to='/services/05'>
                                <FaBuilding />
                                <p className='semibold'>Plumbing</p>
                                </Link>
                                <p className='border-b-[2px] mt-4 '></p>
                                </div>
                                <div>
                                <Link className='flex items-center gap-5 hover:text-orange-500' to='/services/06'>
                                <FaBuilding />
                                <p className='semibold'>Electricity</p>
                                </Link>
                                </div>
                             </div>

                           </div>
                        




    </div>
  )
}

export default ServiceLinks