import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar3 = ({Links}) => {
    const [links, setLinks] = useState('')

    useEffect(() => {
       setLinks(Links)
    },[Links])
  
  return (
    <div className='hidden md:block w-full h-12 bg-orange-500'>
        <div className='w-6/12 mx-auto'>
           <ul className='flex justify-between items-center gap-2 md:gap-6 '>
            {links && 
                Links.map((link) => (
                    <li className='font-display text-white md:text-md py-3 hover:underline hover:underline-offset-8 ' key={link.name}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))
            }
           </ul>
        </div>
    </div>
  )
}

export default Navbar3