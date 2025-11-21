import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const MainRoute = () => {
  return (
    <div>
      <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainRoute


