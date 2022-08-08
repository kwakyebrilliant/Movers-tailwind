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
           
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
                    Property's Details: P0001
            </h3>
            </div>



           </div>

       </div>
    </div>
    </>
    </div>
      )
}

export default AdminPropertiesDetail