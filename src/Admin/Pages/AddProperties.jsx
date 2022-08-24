import React from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaArrowLeft } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom';

const AddProperties = () => {

    const navigate = useNavigate();

  return (
    <div className='text-black'>
    <>
    <div className='flex flex-auto'>
        <AdminSidebar />
        <div className='grow'>
            <AdminPartialNavbar />
       
       <div className='m-5'>
            <div className='flex my-8'>
                <FaArrowLeft className="text-gray-500 text-2xl" onClick={() => navigate(-1)} />
                <p className='mx-2 text-gray-500'>Back</p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-4 sm:pt-10 text-black'>

        <div>
            <h1 className='text-gray-500 text-2xl'>Property Location:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-[400px]"
                    type="text"
                    placeholder="Enter location"
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-[400px]"
                    type="text"
                    placeholder="Enter space"
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Parking Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-[400px]"
                    type="text"
                    placeholder="Enter parking space"
                />
            
            <h1 className='mt-4 text-gray-500 text-2xl'>Property Bathroom:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-[400px]"
                    type="text"
                    placeholder="Enter bathroom"
                />

        </div>

        <div>
            <h1 className='mt-4 text-gray-500 text-2xl'>Property Bedroom:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-[400px]"
                    type="text"
                    placeholder="Enter bedroom"
                />

            <h1 className='text-gray-500 text-2xl'>Property Document:</h1>
            
            
        </div>

        </div>


       </div>


      

     
         
   </div>
</div>
</>
</div>
  )
}

export default AddProperties