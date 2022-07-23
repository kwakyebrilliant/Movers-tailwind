import React from 'react'

import bgImg from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='w-full h-screen p-20 bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-4xl md:text-6xl font-bold'>Properties Managment</h1>
                <p className='text-2xl'>Want to relocate?</p>
                <p className='text-2xl'>We help you relocate.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
        </div>
        
    </div>
  )
}

export default Banner