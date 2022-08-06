import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

import {
  OfficeBuildingIcon,
  HomeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/solid'

const AdminProperties = () => {
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
                    Check your owned properties on MOVERS 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
       </div>


      <div className="flex flex-col bg-white m-auto p-auto">
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex lg:ml-6 md:ml-20 py-4 ml-6">

          <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-green-800  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><HomeIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Home</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-green-800  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><HomeIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Home</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-green-800  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><HomeIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Home</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-green-800  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><HomeIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Home</p>
                    </div>
                  </div>


          </div>
        </div>
      </div>

   </div>
</div>
</>
</div>
  )
}

export default AdminProperties