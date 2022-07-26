import React from 'react'
import Footer from './Footer'

import {
  OfficeBuildingIcon,
  HomeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/solid'


const Properties = () => {
  return (
    <div className='w-full h-screen pt-20'>

      <div className='mx-4 my-8'>
          <h2 className='text-3xl font-bold'>Categories</h2>
      </div>


          
        <div className="flex flex-col bg-white m-auto p-auto">
              <div className="flex overflow-x-scroll hide-scroll-bar">

                <div className="flex flex-nowrap lg:ml-6 md:ml-20 py-4 ml-6">

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-green-800  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><HomeIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Home</p>
                    </div>
                  </div>


                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-blue-800 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl mt-20 flex justify-center font-bold text-white'><OfficeBuildingIcon className='h-16 w-16 text-white' /></p>
                        <p className='text-white mt-2'>Offices</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-red-700 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl flex mt-20 justify-center  font-bold text-white'>
                          <svg className='h-16 w-16 text-white' version="1.1" id="building-alt1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"> <path d="M11,13.5v-9C11,4.2,10.8,4,10.5,4H9V1L5,2.1v11.4H2V14h11v-0.5H11z M7,13.5V3h1v10.5H7z" fill="white"></path> </svg>
                        </p>
                        <p className='text-white mt-2'>Luxury</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-yellow-700 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl flex mt-20 justify-center font-bold text-white'>
                          <svg className='h-16 w-16' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><path d="M4 44V4H12V20L28 12V20L44 12V44H4Z" fill="white" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><rect x="12" y="28" width="8" height="8" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="28" y="28" width="8" height="8" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></rect></svg>
                          </p>
                        <p className='text-white mt-2'>Industrial</p>
                    </div>
                  </div>

                  <div className="inline-block text-center px-3">
                    <div className="w-64 h-64 max-w-xs bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <p className='text-6xl flex mt-20 justify-center font-bold text-black'>
                        <QuestionMarkCircleIcon className='h-16 w-16 text-black' />
                        </p>
                        <p className='text-black mt-2'>Others</p>
                    </div>
                  </div>

                  </div>
                </div>
          </div>


      <Footer />
    </div>
  )
}

export default Properties