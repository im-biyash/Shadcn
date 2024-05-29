import React from 'react'
import logo from '../assets/images/logo.jpg'
import { ModeToggle } from '../components/mode-toggle'
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center p-2 '>
        <div className="logo">
            <img src={logo} className ="h-12 w-auto" alt="" />
        </div>
        <ul className='flex gap-3 p-2 font-semibold'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>  
          <li>Blog</li>
        </ul>
        <ModeToggle />
      </nav>
    </div>
  )
}

export default Navbar
