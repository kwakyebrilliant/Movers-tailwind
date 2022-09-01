import React, { useState } from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa'

import { useNavigate } from 'react-router-dom';

import { ethers } from 'ethers';
import Mover from '../../artifacts/contracts/Mover.sol/Mover.json';

const moverAddress = "0x97BAE06725DC6a637f5362F9243F75EfcfCf2277";

const AddProperties = () => {

    const navigate = useNavigate();


    const [haveMetamask, sethaveMetamask] = useState(true);
    const [id, setId] = useState("");
    const [ownername, setOwnerName] = useState("");
    const [propertylocation, setPropertyLocation] = useState("");
    const [propertyspace, setPropertySpace] = useState("");

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

            <h1 className='text-gray-500 text-2xl'>Property Number:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="P001"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                />

            <h1 className='text-gray-500 text-2xl'>Property Owner:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter owner name"
                    onChange={(e) => setOwnerName(e.target.value)}
                    value={ownername}
                />

            <h1 className='text-gray-500 text-2xl'>Property Location:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter location"
                    onChange={(e) => setPropertyLocation(e.target.value)}
                    value={propertylocation}
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter space"
                    onChange={(e) => setPropertySpace(e.target.value)}
                    value={propertyspace}
                />

            <h1 className='mt-4 text-gray-500 text-2xl'>Property Parking Space:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of parking space"
                />
            
            <h1 className='mt-4 text-gray-500 text-2xl'>Property Bathroom:</h1>
                <input
                    className="mt-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of bathroom"
                />

            <h1 className=' text-gray-500 text-2xl'>Property Bedroom:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of bedroom"
                />

        </div>

        <div>

            <h1 className=' text-gray-500 text-2xl'>Property Category:</h1>
                <form className='my-4'>
                    <select className="rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full" >
                          <option value="javascript">Select Category</option>
                          <option value="home">Home</option>
                          <option value="offices">Offices</option>
                          <option value="luxury">Luxury</option>
                          <option value="industrial">Industrial</option>
                          <option value="others">Others</option>
                    </select>
                </form>

                <h1 className=' text-gray-500 text-2xl'>Property Tye:</h1>
                <form className='my-4'>
                    <select className="rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full" >
                          <option value="javascript">Select Type</option>
                          <option value="sale">Sale</option>
                          <option value="rent">Rent</option>
                          <option value="lease">Lease</option>
                    </select>
                </form>

            <h1 className=' text-gray-500 text-2xl'>Property Duration:</h1>
                <input
                    className="my-4 rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                    type="text"
                    placeholder="Enter number of years"
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