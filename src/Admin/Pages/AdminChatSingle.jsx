import React from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'

import { FaArrowLeft } from 'react-icons/fa'

import { AiOutlineSend } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom';


const AdminChatSingle = () => {

    const navigate = useNavigate();

    // function difference(date1, date2) {  
    //     const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    //     const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    //     const day = 1000*60*60*24;
    //     return(date2utc - date1utc)/day
    //   }
      
    //   const date1 = new Date("2020-12-10"),
    //         date2 = new Date("2021-10-31"),
    //         time_difference = difference(date1,date2)
      
    //   console.log(time_difference)




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
           

            <div className="relative p-6">
              <ul className="space-y-2">
                <li className="flex justify-start">
                  <div className="bg-black relative max-w-xl px-4 py-2 text-gray-100 rounded shadow">
                    <span className="block">Hi</span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="bg-green-700 relative max-w-xl px-4 py-2 text-gray-100 rounded shadow">
                    <span className="block">Hiiii</span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="bg-green-700 relative max-w-xl px-4 py-2 text-gray-100 rounded shadow">
                    <span className="block">how are you?</span>
                  </div>
                </li>
                <li className="flex justify-start">
                  <div className="bg-black relative max-w-xl px-4 py-2 text-gray-100 rounded shadow">
                    <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                  </div>
                </li>

                <li className="flex justify-start">
                  <div className="bg-black relative max-w-xl px-4 py-2 text-gray-100 rounded shadow">
                    <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

      
           <div className="fixed justify-center flex inset-x-0 bottom-0 mx-5 mb-3">
                        <input
                            className="rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-[500px]"
                            type="text"
                            as="textarea"
                            rows={1}
                            placeholder="Enter your message"
                        />
                        <button
                            className='px-3 py-3'
                        >
                            <AiOutlineSend className='w-6 h-6' />
                        </button>
                        </div>


           </div>




       </div>
    </div>
    </>
  
    </div>
      )
}

export default AdminChatSingle