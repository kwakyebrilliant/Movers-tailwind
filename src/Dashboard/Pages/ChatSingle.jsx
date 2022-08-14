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
           


           </div>

           <div className="row">
      <main
        role="main"
        className="col-lg-12 ml-auto mr-auto"
        style={{ maxWidth: "700px" }}
      >
        <div className="content mr-auto ml-auto">
          <div className="col-lg-12 p-3 m-auto mb-3">
            <div className="d-flex fixed-bottom m-3">
              <input
                className="rounded-lg outline-none focus:outline-none ring-1 ring-green-400 p-2 text-lg w-full"
                type="text"
                as="textarea"
                rows={1}
              />
              <button
                type="submit"
              >
                <AiOutlineSend className='bg-green-600' size={40} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>

       </div>
    </div>
    </>
    </div>
      )
}

export default ChatSingle