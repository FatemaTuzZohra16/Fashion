import React from 'react'
import Container from '../Layout/Container'
import { FaArrowRight } from "react-icons/fa";
import us from '../../assets/us 1.png'

const Header = () => {
  return (
    <div className='bg-black text-white font-primary'>
      <Container>
        <div className='flex justify-end'>
          <div className='flex items-center py-2 gap-x-1'>
            <p className='font-semibold text-[12px] leading--[16px]'>Get early access on launches and offers.</p>
            <p className='font-normal text-[12px] leading--[16px]'>Sign Up For Texts</p>
            <FaArrowRight />
          </div>
          <div className='flex gap-x-3 justify-end pl-[437px]'>
            <img src={us} alt="" />
            <p className='font-normal text-[12px] leading--[16px] py-2'>USD</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header