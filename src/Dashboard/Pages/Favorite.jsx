import React from 'react'
import PartialNavbar from '../Partial/PartialNavbar'
import Sidebar from '../Partial/Sidebar'

const Favorite = () => {
  return (
    <div className='text-black'>
    <>
<div className='flex flex-auto'>
   <Sidebar />
   <div className='grow'>
       <PartialNavbar />
       <div className='m-5'>
           <p>Favorite</p>
       </div>
   </div>
</div>
</>
</div>
  )
}

export default Favorite