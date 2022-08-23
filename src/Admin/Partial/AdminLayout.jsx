import React from 'react'
import AdminPartialNavbar from './AdminPartialNavbar'
import AdminSidebar from './AdminSidebar'

const Layout = ({ children }) => {
  return (
    <>
    <div className='flex flex-auto'>
        <AdminSidebar />
        <div className='grow'>
            <AdminPartialNavbar />
            <div className='m-5'>{children}</div>
        </div>
    </div>
</>
  )
}

export default Layout