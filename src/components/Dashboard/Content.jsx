import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'


const Content = () => {
  return (
    <div className="w-full min-h-screen bg-white">
        <div className="md:flex">
        <div className="w-1/5 fixed top-0 left-0 h-full">
            <SideBar />
        </div>
        <div className="md:w-full md:ml-[270px]"> 
            <NavBar />
            <div className="py-4 px-2 md:mr-4  md:mx-0 ml-4 mr-4 min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
        </div>
    </div>
  )
}

export default Content