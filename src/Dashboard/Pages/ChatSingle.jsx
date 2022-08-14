import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

import { FaArrowLeft } from 'react-icons/fa'

import { AiOutlineSend } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom';


const ChatSingle = () => {

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
            <Sidebar />
       <div className='grow'>
           <PartialNavbar />

           <div className='m-5'>

            <div className='flex my-8'>
                <FaArrowLeft className="text-gray-500 text-2xl" onClick={() => navigate(-1)} />
                <p className='mx-2 text-gray-500'>Back</p>
            </div>
           

            {/* <div className='mb-5'>
                <img className="object-cover w-full rounded-2xl" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div> */}

            <footer>
           <div className="dabsolute flex inset-x-0 bottom-0 mx-5">
                        <input
                            className="rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
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
</footer>

           </div>




       </div>
    </div>
    </>
  
    </div>
      )
}

export default ChatSingle