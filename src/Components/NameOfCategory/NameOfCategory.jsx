import React from 'react'
import Container from '../Layout/Container'

const NameOfCategory = () => {
  return (
    <div>
        <Container>
            <div className='flex items-center justify-center'>
                <ul className='flex'>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Holiday Gifting</a></li>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>New Arrivals</a></li>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Best-Sellers</a></li>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Clothing</a></li>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Tops & Sweaters</a></li>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Pants & Jeans</a></li>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Outerwear</a></li>
                    <li><a href="" className='font-normal text-[12px] leading--[16px] py-5 px-3'>Shoes & Bags</a></li>
                </ul>
                <p className='font-normal text-[12px] leading--[16px] py-5 px-3'>Sale</p>
            </div>
        </Container>
    </div>
  )
}

export default NameOfCategory