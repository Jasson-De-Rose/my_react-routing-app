import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navstyle'>
      <NavLink to={"/"} className='nav-link'>Home</NavLink>
      <NavLink to={"/blogs"} className='nav-link'>Blogs</NavLink>
      <NavLink to={"/contact"} className='nav-link'>Contact</NavLink>
    </nav>
  )
}

export default Navbar
