import React, {useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

import { FaHome } from 'react-icons/fa'

import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[70px] z-10 bg-zinc-900 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
         <FaHome className=' text-green-500 lg:w-[35px] lg:h-[35px]' />
          <h1 className='text-3xl font-bold text-white mr-4 sm:text-4xl'>MOVERS.</h1>
          <ul className='hidden text-white md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Properties</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='px-8 py-3'>Connect</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-white' /> : <XIcon className='w-5 text-white' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Support</li>
        <li className='border-b-2 border-zinc-300 w-full'>Properties</li>

        <div className='flex flex-col my-4'>
            <button className='px-8 py-3'>Connect</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;