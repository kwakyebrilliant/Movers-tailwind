import React from 'react'

import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { FaHome } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <FaHome className='sm:w-[300px] text-green-800 lg:w-[35px] lg:h-[35px]' />
                <h1 className='text-1xl font-bold mr-4 sm:text-4xl'>MOVERS.</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar