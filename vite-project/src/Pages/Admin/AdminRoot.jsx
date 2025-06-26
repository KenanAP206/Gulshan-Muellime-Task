import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../Components/Admin/Navbar'
import AsideBar from '../../Components/Admin/AsideBar'
function AdminRoot() {
  return (
    <div>
    <Navbar/>
     <Outlet/>
    <AsideBar/>
    </div>
  )
}

export default AdminRoot
