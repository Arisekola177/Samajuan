import React, { useEffect, useState } from 'react'
import { FaBuilding } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaAddressCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar2 = ({Links}) => {
const [open, setOpen] = useState(false)
const [links, setLinks] = useState('')

useEffect(() => {
setLinks(Links)
},[Links])
  return (
    <div className='w-full'>
        <div className= 'w-10/12 mx-auto py-4 flex justify-between items-center'>
        <Link to='/'>
               <div className='flex justify-between items-center gap-2'>
               
                   <div>
                    <FaBuilding className='lg:text-5xl md:text-3xl text-xl text-orange-500' />
                   </div>
                   <div>
                    <h1 className='uppercase lg:text-2xl text-normal text-black font-display'>Sam<span className='text-orange-500'>a</span>juan</h1>
                    <span className='hidden md:block font-display '>Build Your Dreams</span>
                   </div>
                  
               </div>
               </Link>
              
               <div className='hidden md:flex justify-between items-center gap-5'>
                    <div className='flex justify-between items-center gap-2'>
                        <FaPhone className='text-orange-500' />
                        <p className='font-display'>+2349065242634</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <FaAddressCard  className='text-orange-500'/>
                        <p className='font-display'>Akoka</p>
                    </div>
               </div>
               <div onClick={()=>setOpen(!open)} className='lg:text-3xl text-xl text-black cursor-pointer md:hidden'>
               <ion-icon name={open ? 'close':'menu'}></ion-icon>
               </div>

               <ul className={`absolute  bg-white z-[1] left-0 w-full  pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {links &&
          Links.map((link)=>(
            <li key={link.name} className=' text-md my-7'>
              <Link to={link.path} className='text-gray-800 hover:text-orange-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
       
      </ul>
          
        </div>
    </div>
  )
}

export default Navbar2