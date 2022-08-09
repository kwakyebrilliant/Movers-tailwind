import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

import { FaArrowLeft } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom';

const AdminPropertiesDetail = () => {

    const navigate = useNavigate();

    return (
        <div className='text-black'>
        <>
    <div className='flex flex-auto'>
            <Sidebar />
       <div className='grow'>
           <PartialNavbar />

           <div className='m-5'>

            <div className='flex my-8'>
                <FaArrowLeft className="text-gray-500 text-2xl" onClick={() => navigate(-1)} />
                <p className='mx-2 text-gray-500'>Back</p>
            </div>

            <div className='mb-5'>
                <img className="object-cover w-full h-80 rounded-2xl" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>


        <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-4 sm:pt-10 text-black'>

        <div>
            <h1 className='text-gray-500 text-3xl'>Property Location:</h1>
        <p className='text-black mb-5 font-bold'>123 Wallaby Avenue, Park Road</p>
        </div>

        <div>
        <h1>hi</h1>
        </div>

        </div>

           </div>

       </div>
    </div>
    </>
    </div>
      )
}

export default AdminPropertiesDetail