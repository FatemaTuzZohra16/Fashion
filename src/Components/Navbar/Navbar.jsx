import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div>
        <Container>
            <nav>
                <div className='flex justify-between items-center font-primary'>
                    <div>
                        <ul className='flex items-center'>
                            <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Women</a></li>
                            <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Men</a></li>
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
    </div>
  )
}

export default Navbar

