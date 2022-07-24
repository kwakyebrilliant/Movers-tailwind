import React from 'react'

import { FaAd, FaMoneyCheck } from 'react-icons/fa'

import {
    OfficeBuildingIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='w-full h-screen p-20 bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-4xl md:text-6xl font-bold'>Properties <strong className="font-extrabold text-green-700 sm:block">Management</strong></h1>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>Want to relocate?</p>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>We help you relocate.</p>
                {/* <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button> */}
                <div className="flex flex-wrap gap-4 mt-8 text-center">
                    <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-700 sm:w-auto active:bg-green-700 hover:bg-transparent hover:text-green-700 focus:outline-none focus:ring" href="/">
                    Get Started
                    </a>

                    <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-700 sm:w-auto hover:bg-transparent active:text-green-700 focus:outline-none focus:ring" href="/">
                    Learn More
                    </a>
                </div>

            </div>
            
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col md:flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Our Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><OfficeBuildingIcon className='h-6 text-green-700' />Property Listing</p>
                    <p className='flex px-4 py-2 text-slate-500'><FaMoneyCheck className='h-6 text-green-700' />Buying</p>
                    <p className='flex px-4 py-2 text-slate-500'><FaAd className='h-6 text-green-700' />Selling</p>
                    <p className='flex px-4 py-2 text-slate-500'><FaAd className='h-6 text-green-700' />Lease</p>
                </div>
            </div>

            {/* <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                            border border-slate-300 rounded-xl text-center shadow-xl"
            >
                <p>Our Services</p>
                <div className="mt-2 flex justify-between flex-wrap px-4">
                    <dl className="flex items-center mt-6 space-x-8 text-xs">
                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                        <OfficeBuildingIcon className='h-6 text-green-700' />

                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                        <dt className="text-gray-500">
                           Property
                        </dt>

                        <dd className="font-medium">
                            Listing
                        </dd>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <FaMoneyCheck className='h-6 text-green-700' />

                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                        <dt className="text-gray-500">
                           Property
                        </dt>

                        <dd className="font-medium">
                            Listing
                        </dd>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                    <FaMoneyCheck className='h-6 text-green-700' />

                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                        <dt className="text-gray-500">
                            Bedroom
                        </dt>

                        <dd className="font-medium">
                            4 rooms
                        </dd>
                        </div>
                    </div>
                    </dl>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Banner