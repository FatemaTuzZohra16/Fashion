import React from 'react'
import Container from '../Layout/Container'
import design from '../../assets/design.png'

const Design = () => {
  return (
     <div className='font-primary'>
            <Container>
                <div className='flex justify-between items-center bg-[#e6ded8]'>
                    <div>
                        <h5 className='font-semibold text-[12px] leading-4'>OUR QUALITY</h5>
                        <h2 className='text-[40px] leading-[48px] mb-5'>Designed to last.</h2>
                        <p className='max-w-[560px] text-[14px] leading-[16.8px] '>At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.</p>
                    </div>
                    <div>
                        <img src={design} alt="" />
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default Design