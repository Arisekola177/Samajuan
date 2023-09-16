import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='hidden md:block w-full  bg-slate-600'>
        <div className='w-10/12 mx-auto py-3 flex justify-between items-center'> 
        <div className='flex justify-between gap-4 items-center'>
        < FaFacebook  className='text-white cursor-pointer hover:text-orange-500'/>
        <FaTwitter className='text-white cursor-pointer hover:text-orange-500' />
        <FaTiktok className='text-white cursor-pointer hover:text-orange-500'/>
        <FaInstagram className='text-white cursor-pointer hover:text-orange-500' />
        </div>
        <div className='bg-orange-600 rounded-md hover:bg-orange-900'>
          <Link to='/contact'>
          <button className='text-white uppercase px-6 py-2 font-display'>Get Started</button>
          </Link>
        </div>
             
        </div>
    </div>
  )
}

export default Navbar1