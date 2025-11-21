import React from 'react'
import Container from '../Layout/Container'
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#f5f4f4] pt-[60px] pb-[48px]'>
        <Container>
            <div className='flex gap-[130px]'>
                <div className='w-[60%] flex justify-between'>
                    <div>
                        <h3 className='font-semibold text-[16px] leading-[24px] mb-5'>Account</h3>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Log In</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Sign Up</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373]'>Redeem a Gift Card</p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-[16px] leading-[24px] mb-5'>Company</h3>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>About</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Environmental <br/> Initiatives</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Factories</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>DEI</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Careers</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>International</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373]'>Accessibility</p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-[16px] leading-[24px] mb-5'>Get Help</h3>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Help Center</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Return Policy</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Shipping Info</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373]'>Bulk Orders</p>
                    </div>
                    <div>
                        <h3 className='font-semibold text-[16px] leading-[24px] mb-5'>Connect</h3>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Facebook</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Instagram</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Twitter</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373] mb-[10px]'>Affiliates</p>
                        <p className='text-[14px] leading-[16.8px] text-[#737373]'>Out Stores</p>
                    </div>
                </div>
                <div className='w-[40%] flex'>
                    <input type="email" 
                placeholder='Email Address'
                className='w-[388px] text-[14px] leading-[16.8px] h-[53px] pl-[15px] bg-white outline-0'
                />
                <div className='w-[52px] h-[52px] bg-black flex justify-center items-center'>
                    <FaArrowRight  className='text-white'/>
                </div>
                </div>
            </div>
            <div className='pt-[36px] flex justify-between text-center px-[99px]'>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Privacy Policy</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Terms of Service</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Do Not Sell or Share My Personal Information</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>CS Supply Chain Transparency</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Vendor Code of Conduct</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Sitemap Pages</p>
                <p className='text-[12px] leading-[16px] text-[#737373]'>Sitemap Products</p>
            </div>
            <div>
                <p className='text-[12px] leading-[16px] text-[#737373] mt-[16px] text-center'>© 2023 All Rights Reserved</p>
            </div>
        </Container>
    </div>
  )
}

export default Footer