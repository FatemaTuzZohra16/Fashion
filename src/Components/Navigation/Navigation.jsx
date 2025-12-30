import React from 'react'
import Container from '../Layout/Container'
import navigation1 from '../../assets/navigation1.png'
import navigation2 from '../../assets/navigation2.png'

const Navigation = () => {
    const menuData = [
        {
            title: 'Holiday Gifting'
        },
        {
            title: 'New Arrivals'
        },
        {
            title: 'Best-Sellers'
        },
        {
            title: 'Clothing'
        },
        {
            title: 'Tops & Sweaters'
        },
        {
            title: 'Pants & Jeans'
        },
        {
            title: 'Outerwear'
        },
        {
            title: 'Shoes & Bags'
        },
        {
            title: 'Sale'
        },
    ]
  return (
  <>
    <div className='border-t border-[#eeeded] bg-white'>
        <Container>
            <div className='flex justify-center'>
                {
                    menuData.map((item)=>(
                        <div>
                            <p className='text-[12px] leading-[16px] py-5 px-3'>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
    <div className='border-t border-[#eeeded] bg-white pb-[90px]'>
        <Container>
            <div className='mt-[55px] mb-[90px] flex  justify-between'>
                <div className='flex gap-[260px] max-w-[50%]'>
                    <div>
                        <h4 className='text-[10px] font-semibold leading-[16px] mb-4'>HIGHLIGHTS</h4>
                        <p className='text-[14px] leading-[16px] mb-4'>Shop All New Arrivals</p>
                        <p className='text-[14px] leading-[16px] mb-4'>The Gift Guide</p>
                        <p className='text-[14px] leading-[16px] mb-4'>New Bottoms</p>
                        <p className='text-[14px] leading-[16px] mb-4'>New Tops</p>
                        <p className='text-[14px] leading-[16px] mb-4'>T-Shirt Bundles</p>
                        <p className='text-[14px] leading-[16px] mb-4'>Under $100</p>
                    </div>
                    <div>
                        <h4 className='text-[10px] font-semibold leading-[16px] mb-4'>FEATURED SHOPS</h4>
                        <p className='text-[14px] leading-[16px] mb-4'>The Holiday Outfit Edit</p>
                        <p className='text-[14px] leading-[16px] mb-4'>Giftable Sweaters</p>
                        <p className='text-[14px] leading-[16px] mb-4'>Uniform & Capsule</p>
                        <p className='text-[14px] leading-[16px] mb-4'>The Performance Chino Shop</p>
                        <p className='text-[14px] leading-[16px] mb-4'>Top Rated Men’s Clothing</p>
                    </div>
                </div>
                <div className='flex gap-[24px]'>
                    <img src={navigation1} alt="" />
                    <img src={navigation2} alt="" />
                </div>
            </div>
        </Container>
    </div>
  </>
  )
}

export default Navigation