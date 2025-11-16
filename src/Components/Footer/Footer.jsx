import React from 'react'
import Container from '../Layout/Container'
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#f5f4f4] pt-[60px] pb-[48px]'>
        <Container>
            <div className='flex justify-end'>
                <input type="email" 
                placeholder='Email Address'
                className='w-[388px] text-[14px] leading-[16.8px] py-[18px] pl-[15px] bg-white outline-0'
                />
                <div className='w-[52px] h-[52px] bg-black flex justify-center items-center'>
                    <FaArrowRight  className='text-white'/>
                </div>
            </div>
            <div className='pt-[223px] flex justify-between text-center px-[99px]'>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Privacy Policy</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Terms of Service</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Do Not Sell or Share My Personal Information</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>CS Supply Chain Transparency</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Vendor Code of Conduct</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Sitemap Pages</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Sitemap Products</p>
            </div>
        </Container>
    </div>
  )
}

export default Footer