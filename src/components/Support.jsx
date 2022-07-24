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
                activities on the platform. Remember we are here to serve you to get the best of deals available on
                this platform.
            </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

            <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                            Sales
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <PhoneIcon className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                        Technical Support
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <SupportIcon className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    <div className="relative hover:shadow-lg block bg-white p-8 overflow-hidden border border-gray-100 rounded-lg">
                    <span
                        className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                        <h5 className="text-2xl font-bold text-gray-900">
                            Media Inquiries
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                        </div>

                        <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <ChipIcon className='w-16 h-16 p-4 object-cover bg-green-600 shadow-2xl text-white rounded-lg' />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                        </p>
                    </div>

                    <dl className="flex mt-6">
                        <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium flex text-green-600">Continue <ArrowSmRightIcon className='w-5 ml-2' /></dt>
                        <dd className="text-xs text-gray-500">Continue onFAQ's</dd>
                        </div>

                    </dl>
                    </div>

                    
            </div>    

        </div>

        <div className='w-full text-white my-24'>
            <div className='w-full h-[750px] bg-slate-900 absolute mix-blend-overlay'></div>

            <div className='max-w-[1240px] mx-auto py-12'>

                <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Recents</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your budget.</h3>
                <p className='text-3xl'>
                    Be the first person to have a look at these amazing properties
                    and make a bid for it. You may be the new owner.
                </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3'>

                <div className="block overflow-hidden mx-4 rounded-2xl">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

                 <div className="p-4 bg-gray-900">
                        <dl>
                        <div>
                            <dt className="sr-only">
                            Price
                            </dt>

                            <dd className="text-sm text-gray-100">
                            $240,000
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                            Address
                            </dt>

                            <dd className="font-medium">
                            123 Wallaby Avenue, Park Road
                            </dd>
                        </div>
                        </dl>

                        <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Parking
                            </dt>

                            <dd className="font-medium">
                                2 spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bathroom
                            </dt>

                            <dd className="font-medium">
                                2 rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bedroom
                            </dt>

                            <dd className="font-medium">
                                4 rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </div>
                </div>

                <div className="block overflow-hidden mx-4 rounded-2xl">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

                 <div className="p-4 bg-gray-900">
                        <dl>
                        <div>
                            <dt className="sr-only">
                            Price
                            </dt>

                            <dd className="text-sm text-gray-100">
                            $240,000
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                            Address
                            </dt>

                            <dd className="font-medium">
                            123 Wallaby Avenue, Park Road
                            </dd>
                        </div>
                        </dl>

                        <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Parking
                            </dt>

                            <dd className="font-medium">
                                2 spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bathroom
                            </dt>

                            <dd className="font-medium">
                                2 rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bedroom
                            </dt>

                            <dd className="font-medium">
                                4 rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </div>
                </div>

                <div className="block overflow-hidden mx-4 rounded-2xl">
                <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

                 <div className="p-4 bg-gray-900">
                        <dl>
                        <div>
                            <dt className="sr-only">
                            Price
                            </dt>

                            <dd className="text-sm text-gray-100">
                            $240,000
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                            Address
                            </dt>

                            <dd className="font-medium">
                            123 Wallaby Avenue, Park Road
                            </dd>
                        </div>
                        </dl>

                        <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Parking
                            </dt>

                            <dd className="font-medium">
                                2 spaces
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bathroom
                            </dt>

                            <dd className="font-medium">
                                2 rooms
                            </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                            className="w-4 h-4 text-green-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                            <dt className="text-gray-100">
                                Bedroom
                            </dt>

                            <dd className="font-medium">
                                4 rooms
                            </dd>
                            </div>
                        </div>
                        </dl>
                    </div>
                </div>

                

                
                
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default support