import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

import { Link } from 'react-router-dom'

const Favorite = () => {
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
                    Check your favorite properties on MOVERS 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
       </div>

       <div className='w-full my-32'>

          <div className='grid md:grid-cols-2 gap-4 mx-8 text-center'>

          <div className="flex flex-col bg-white rounded-sm group hover:shadow-lg">
            <img className="object-cover rounded-2xl w-full h-full" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />  
          </div>


          <div className="flex flex-col bg-white rounded-sm">
          
                  <h5 className="text-5xl mt-20 font-bold text-green-900">$240,000</h5>
                  <div className="pt-2 mt-4 border-t-2 border-indigo-100">
                  <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                    123 Wallaby Avenue, Park Road
                  </p>

                  <p className="text-lg inline-flex font-medium">
                  <dl className="flex items-center mt-6 space-x-8 text-xs">
                      <div className="sm:inline-flex sm:items-center sm:shrink-0">
                          <svg
                          className="w-4 h-4 text-green-500"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                          </svg>

                          <div className="sm:ml-3 mt-1.5 sm:mt-0">
                          <dt className="text-gray-900">
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
                          <dt className="text-gray-900">
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
                          <dt className="text-gray-900">
                              Bedroom
                          </dt>

                          <dd className="font-medium">
                              4 rooms
                          </dd>
                          </div>
                      </div>
                      </dl>
                  </p>

                  </div>
                  <div className="items-center mt-4">
                  <div className='inline-flex flex-col'>
                    <Link to="/single">
                    <button className='px-3 py-2'>View Details</button>
                    </Link>
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

export default Favorite