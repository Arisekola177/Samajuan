import React from 'react'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import Navbar3 from './Navbar3'

const Navbar = () => {
    const Links = [
        {name: 'HOME', path: '/'},
        {name: 'PROJECTS', path: '/projects'},
        {name: 'SERVICES', path: '/services'},
        {name: 'ABOUT', path: '/about'},
        {name: 'CONTACT', path: '/contact'}
    ]
     
   
  return (
    <div>
        <Navbar1 />
        <Navbar2 Links={Links} />
        <Navbar3 Links={Links} />
    </div>
  )
}

export default Navbar