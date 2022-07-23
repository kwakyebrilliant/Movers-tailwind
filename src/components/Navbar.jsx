import React from 'react'

import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { FaHome } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-screen h-[70px] z-10 bg-zinc-900 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <FaHome className=' text-green-500 lg:w-[35px] lg:h-[35px]' />
                <h1 className='text-1xl font-bold text-white mr-4 sm:text-4xl'>MOVERS.</h1>
                <ul className='hidden text-white md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Projects</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-white mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar