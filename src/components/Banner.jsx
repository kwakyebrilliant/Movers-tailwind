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
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-white
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Our Services</p>
                <div className='flex justify-between flex-col px-8 md:flex-row'>
                    <div className='flex px-4 py-2 text-slate-500'><OfficeBuildingIcon className='h-6 text-green-700' />Property Listing</div>
                    <div className='flex px-4 py-2 text-slate-500'><FaMoneyCheck className='h-6 text-green-700' />Buying</div>
                    <div className='flex px-4 py-2 text-slate-500'><FaAd className='h-6 text-green-700' />Selling</div>
                    <div className='flex px-4 py-2 text-slate-500'><FaAd className='h-6 text-green-700' />Lease</div>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default Banner