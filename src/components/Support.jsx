import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpeg'

const support = () => {
  return (
    <div name='support' className='w-full mt-24'>

        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Got Questions?</h3>
              <p className='py-4 text-3xl text-slate-300 text-center'>
                We have a reliable team available to assist you in all your questions and help you go about your 
                activities on the platform. Remember we are here to serve you to get best of deals available on
                this platform.
            </p>
            </div>
        </div>
        
    </div>
  )
}

export default support