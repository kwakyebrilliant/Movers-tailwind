import React from 'react'
import AdminPartialNavbar from '../Partial/AdminPartialNavbar'
import AdminSidebar from '../Partial/AdminSidebar'
import { Link } from 'react-router-dom'

const AdminChat = () => {
  return (
    <div className='text-black'>
    <>
    <div className='flex flex-auto'>
        <AdminSidebar />
        <div className='grow'>
            <AdminPartialNavbar />

       <div className='m-5'>
            
            <header className="rounded-2xl inset-x-0 bottom-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:justify-between sm:items-center sm:flex">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, Brilliant!
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-900">
                    Check your previous chats on MOVERS 🎉
                    </p>
                </div>

                
                </div>
            </div>
            </header>
            </div>


            {/* <div className='relative px-4 sm:pt-12 sm:pb-12 text-black'>
              <p className="font-medium text-3xl text-gray-900 px-4">Browser Chats</p>
              <form className='flex flex-col sm:flex-row'>
                  <input className='w-full mt-12 p-2 rounded-md mx-4' type="text" placeholder='Filter Chats..'/>
              </form>
            </div> */}

            <div className='relative px-4 pt-4 sm:pt-4 sm:pb-12 text-black'>

              <form className='flex mb-8 flex-col sm:flex-row'>
                  <input className=' mt-12 p-2 rounded-md mx-4' type="text" placeholder='Filter Chats..'/>
              </form>
            <div className='bg-white flex-row shadow-lg rounded-2xl px-4'>

            <Link to="/chatsingle">
            <div className="relative">

            <div className="flex items-center p-4">
              <img
                className="object-cover w-12 h-12 rounded-lg"
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
              />

              <div className="ml-3 overflow-hidden">
                <p className="font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum?
                </p>
              </div>
            </div>
          </div>
          </Link>

          <div className="relative">

        <div className="flex items-center p-4">
          <img
            className="object-cover w-12 h-12 rounded-lg"
            src="https://www.hyperui.dev/photos/man-5.jpeg"
            alt=""
          />

          <div className="ml-3 overflow-hidden">
            <p className="font-medium text-gray-900">John Doe</p>
            <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum?
            </p>
          </div>
        </div>
        </div>

        <div className="relative">

        <div className="flex items-center p-4">
          <img
            className="object-cover w-12 h-12 rounded-lg"
            src="https://www.hyperui.dev/photos/man-5.jpeg"
            alt=""
          />

          <div className="ml-3 overflow-hidden">
            <p className="font-medium text-gray-900">John Doe</p>
            <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
                  laborum?
            </p>
          </div>
        </div>
        </div>

        <div className="relative">

        <div className="flex items-center p-4">
        <img
        className="object-cover w-12 h-12 rounded-lg"
        src="https://www.hyperui.dev/photos/man-5.jpeg"
        alt=""
        />

        <div className="ml-3 overflow-hidden">
        <p className="font-medium text-gray-900">John Doe</p>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          laborum?
        </p>
        </div>
        </div>
        </div>

        <div className="relative">

        <div className="flex items-center p-4">
        <img
        className="object-cover w-12 h-12 rounded-lg"
        src="https://www.hyperui.dev/photos/man-5.jpeg"
        alt=""
        />

        <div className="ml-3 overflow-hidden">
        <p className="font-medium text-gray-900">John Doe</p>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          laborum?
        </p>
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

export default AdminChat