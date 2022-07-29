import React from 'react'

const PartialNavbar = () => {

  return (
    <nav className='bg-white shadow-sm border-gray-200 mx-2 px-2 py-2.5 rounded'>
            <div className='container flex justify-between items-center mx-auto'>
                <div className='flex items-center mx-auto'>
                </div>

                <div className='flex justify-end pr-4 pt-4'>
                    <span className='text-xl font-medium whitespace-nowrap'>
                        Welcome
                    </span>
                </div>
            </div>
        </nav>
  )
}

export default PartialNavbar