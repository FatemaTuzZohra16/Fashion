import React, { useState } from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router';
import Navigation from '../Navigation/Navigation'

const Navbar = () => {
    const [navMenu, setNavMenu]=useState(false)
  return (
    <div className='relative'>
        <Container>
            <nav>
                <div className='flex justify-between items-center font-primary'>
                    <div>
                        <ul className='flex items-center'>
                            <li><a href="/" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Women</a></li>
                            <li><button href=""  onClick={()=>setNavMenu(!navMenu)} className='font-normal text-[12px] leading--[16px] py-5 px-3'>Men</button></li>
                            <li><Link to="/about" className='font-normal text-[12px] leading--[16px] py-5 px-3'>About</Link></li>
                            <li><a href="/blog" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Everworld Stories</a></li>
                        </ul>
                    </div>
                    <div>
                        <img  src={logo}/>
                    </div>
                    <div className='flex py-3 gap-x-3'>
                        <Link  to='/search'><IoSearch size={16} /></Link>
                        <FaRegUser size={16} />
                        <IoCartOutline size={16} />
                    </div>
                </div>
            </nav>
        </Container>
        {navMenu && (
  <div className="absolute inset-0 z-40 top-[100%]">
    <Navigation />
  </div>
)}
    </div>
  )
}

export default Navbar

