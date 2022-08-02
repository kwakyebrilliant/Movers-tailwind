import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

const Booked = () => {
  return (
    <div className='text-black'>
    <>
<div className='flex flex-auto'>
   <Sidebar />
   <div className='grow'>
       <PartialNavbar />
       
       <div className='m-5'>
       <header className="rounded-2xl inset-x-0 bottom-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:justify-between sm:items-center sm:flex">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, Brilliant!
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-900">
                    Check your booked properties on MOVERS 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
       </div>

       <div className='relative px-4 pt-4 sm:pt-4 sm:pb-12 text-black'>
        <form className='flex mb-8 flex-col sm:flex-row'>
          <input className=' mt-12 p-2 rounded-md mx-4' type="text" placeholder='Filter Booked..'/>
        </form>
      </div>

   </div>
</div>
</>
</div>
  )
}

export default Booked