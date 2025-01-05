import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
        <div className='w-full h-[45px] flex justify-center items-center p-4 bg-black gap-x-5'>
        <NavLink to='/' className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }>Home</NavLink>

        <NavLink to='/pastes'className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }>Notes</NavLink>

        <NavLink to='/about' className={({ isActive }) =>
            isActive
              ? "text-teal-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }>About</NavLink>
        </div>
        
    </div>
  )
}

export default Navbar