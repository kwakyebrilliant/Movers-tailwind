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


            


       </div>


      

     
         
   </div>
</div>
</>
</div>
  )
}

export default AddProperties