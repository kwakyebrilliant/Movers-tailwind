import React from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa'

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
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter location"
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter space"
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Parking Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter parking space"
                />
            
            <h1 className='mt-4 text-gray-500 text-2xl'>Property Bathroom:</h1>
                <input
                    className="mt-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter bathroom"
                />

        </div>

        <div>
            <h1 className=' text-gray-500 text-2xl'>Property Bedroom:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter bedroom"
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Documents:</h1>

                <div className='mx-2 mt-4 border-dotted border-2 border-green-700 justify-center'>
                    <div className='grid grid-rows-2 justify-center'>
                        <div className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring">
                            <span className="text-sm font-medium">Upload Image </span>
                            <FaPlusCircle className='mx-2' />
                        </div>
                        <p className='m-2'>PNG, JPG, JPEG up to 5MB</p>
                    </div>
                   
                </div>

                <div className='mx-2 mt-4 border-dotted border-2 border-green-700 justify-center'>
                    <div className='grid grid-rows-2 justify-center'>
                        <div className="inline-flex cursor-pointer items-center px-8 py-3 mt-8 text-white bg-green-600 border border-green-600 rounded hover:bg-transparent hover:text-green-600 active:text-green-500 focus:outline-none focus:ring">
                            <span className="text-sm font-medium">Upload Image </span>
                            <FaPlusCircle className='mx-2' />
                        </div>
                        <p className='m-2'> PDF, DOCX up to 5MB</p>
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

export default AddProperties