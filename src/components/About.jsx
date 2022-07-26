import React from 'react'

import {
    ArrowRightIcon,
} from '@heroicons/react/solid'

const About = () => {
  return (
    <div name="about" className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>

            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted Properties Finding Platform</h2>
                <p className=' text-xl py-6 text-gray-500'>
                    We understand the fear and numerous challenges in getting a property.<br/> 
                    And as such we are giving you a platform with trusted property holders.<br/>
                    Have in mind that all processes on the platform run on the blockchain <br/>
                    and as such it is transparent to all end users.
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>

            <div className="flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow-xl group hover:shadow-lg">
                <div>
                    <h5 className="text-5xl font-bold text-green-700">100%</h5>
                    <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                    <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Guaranteed Success</p>
                    </div>
                </div>

                <div className="inline-flex items-center mt-16 text-green-700">
                    <p className="text-lg font-medium">How we do it</p>

                    <ArrowRightIcon className='w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3' />
                </div>
            </div>

            
            <div className="flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow-xl group hover:shadow-lg">
                <div>
                    <h5 className="text-5xl font-bold text-green-700">24/7</h5>
                    <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                    <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Everytime Delivery</p>
                    </div>
                </div>

                <div className="inline-flex items-center mt-16 text-green-700">
                    <p className="text-lg font-medium">How we do it</p>

                    <ArrowRightIcon className='w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3' />
                </div>
            </div>

            <div className="flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow-xl group hover:shadow-lg">
                <div>
                    <h5 className="text-5xl font-bold text-green-700">100K</h5>
                    <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                    <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">Successful Transaction</p>
                    </div>
                </div>

                <div className="inline-flex items-center mt-16 text-green-700">
                    <p className="text-lg font-medium">How we do it</p>

                    <ArrowRightIcon className='w-6 h-6 ml-3 transition-transform transform group-hover:translate-x-3' />
                </div>
            </div>
 

            </div>

        </div>
    </div>
  )
}

export default About