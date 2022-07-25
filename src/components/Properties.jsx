import React from 'react'
import Footer from './Footer'

import {
  OfficeBuildingIcon,
  HomeIcon
} from '@heroicons/react/solid'

const Properties = () => {
  return (
    <div className='w-full h-screen pt-20'>

      <div className='mx-4 my-8'>
          <h2 className='text-3xl font-bold'>Categories</h2>
      </div>
      
            <div className='grid md:grid-cols-4 mx-6 gap-8 px-2 py-4 text-center'>

                <div className='border bg-green-800 py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl flex justify-center font-bold text-white'><HomeIcon className='h-16 w-16 text-white' /></p>
                    <p className='text-white mt-2'>Home</p>
                </div>

                <div  className='border py-8 bg-blue-800 rounded-xl shadow-xl' >
                <p className='text-6xl flex justify-center font-bold text-white'><OfficeBuildingIcon className='h-16 w-16 text-white' /></p>
                    <p className='text-white mt-2'>Offices</p>
                </div>

                <div className='border py-8 bg-red-700 rounded-xl shadow-xl' >
                    <p className='text-6xl flex justify-center  font-bold text-white'>100K</p>
                    <p className='text-white mt-2'>Luxury</p>
                </div>

                <div className='border py-8 bg-yellow-700 rounded-xl shadow-xl' >
                    <p className='text-6xl  font-bold text-white'>100K</p>
                    <p className='text-white mt-2'>Industrial</p>
                </div>

            </div>

      <Footer />
    </div>
  )
}

export default Properties