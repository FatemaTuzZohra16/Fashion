import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Header from '../Header/Header'

const MainRoute = () => {
  return (
    <div>
      <Header />
        <Navbar />
        <Outlet />
        {/* <Foooter /> */}
    </div>
  )
}

export default MainRoute


