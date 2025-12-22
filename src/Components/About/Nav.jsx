import React from 'react'
import Container from '../Layout/Container'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <div className='border-t border-[#eeeded]'>
        <Container>
            <nav className='flex justify-center'>
                <div className='flex justify-between items-center font-primary py-5'>
                        <ul className='flex items-center'>
                            <li><a href="/about" className='font-normal text-[12px] leading--[16px]  px-3'>About</a></li>
                            <li><Link to= "/stores" href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Stores</Link></li>
                            <li><Link to="" className='font-normal text-[12px] leading--[16px]  px-3'>Factories</Link></li>
                            <li><a href="" className='font-normal text-[12px] leading--[16px]  px-3'>Environmental Initiatives</a></li>
                            <li><Link to="" className='font-normal text-[12px] leading--[16px]  px-3'>Our Carbon Commitment</Link></li>
                            <li><Link to="" className='font-normal text-[12px] leading--[16px]  px-3'>Annual Impact Report</Link></li>
                            <li><Link to="" className='font-normal text-[12px] leading--[16px]  px-3'>Cleaner Fashion</Link></li>
                        </ul>
                </div>
            </nav>
        </Container>
    </div>
  )
}

export default Nav