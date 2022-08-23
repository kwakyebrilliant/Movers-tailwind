import React from 'react'
import PartialNavbar from './PartialNavbar'
import AdminSidebar from './AdminSidebar'

const Layout = ({ children }) => {
  return (
    <>
    <div className='flex flex-auto'>
        <AdminSidebar />
        <div className='grow'>
            <PartialNavbar />
            <div className='m-5'>{children}</div>
        </div>
    </div>
</>
  )
}

export default Layout