import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
        <div className='flex justify-center items-center gap-10 mt-10'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/pastes'>Notes</NavLink>
        <NavLink to='/about'>View</NavLink>
        </div>
        
    </div>
  )
}

export default Navbar