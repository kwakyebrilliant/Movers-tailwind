import React, { useState } from 'react'

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const PartialNavbar = () => {

    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <nav className='bg-white shadow-sm border-gray-200 mx-2 px-2 py-2.5 rounded'>
            <div className='container flex justify-between items-center mx-auto'>

            <div className='md:hidden' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5 text-black' /> : <XIcon className='w-5 text-black' />}

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-900 w-fit px-8'}>
                <li className='border-zinc-900 w-fit text-white'><Link to="/summary" onClick={handleClose}>Summary</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/booked" onClick={handleClose}>Booked</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/adminproperties" onClick={handleClose}>Properties</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/favorite" onClick={handleClose}>Favorite</Link></li>
                <li className='border-zinc-900 w-fit text-white'><Link to="/chat" onClick={handleClose}>Chat</Link></li>
            </ul>
          
            </div>
                <div className='flex items-center mx-auto'>
                </div>

                <div className='flex justify-end pr-4 pt-4'>
                    <span className='text-xl font-medium whitespace-nowrap'>
                        Welcome
                    </span>
                </div>
            </div>
        </nav>
  )
}

export default PartialNavbar