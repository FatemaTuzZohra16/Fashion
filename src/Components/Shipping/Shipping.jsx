import React from 'react'
import Container from '../Layout/Container'
import shipping1 from '../../assets/shipping1.png'
import shipping2 from '../../assets/shipping2.png'
import shipping3 from '../../assets/shipping3.png'

const Shipping = () => {
  return (
    <div className='py-[90px]'>
        <Container>
            <div className='flex justify-between text-center'>
                <div className='px-[55px]'>
                  <img src={shipping1} alt=""  className='mx-auto'/>
                  <h3 className='font-semibold text-[14px] leading-[21px] pt-5 pb-1'>Complimentary Shipping</h3>
                  <p className='text-[14px] leading-[16.8px]'>Enjoy free shipping on U.S. orders over <br/> $100.</p>
                </div>
                <div className='px-[55px]'>
                  <img src={shipping2} alt=""  className='mx-auto'/>
                  <h3 className='font-semibold text-[14px] leading-[21px] pt-5 pb-1'>Consciously Crafted</h3>
                  <p className='text-[14px] leading-[16.8px]'>Designed with you and the planet in <br/> mind.</p>
                </div>
                <div className='px-[55px]'>
                  <img src={shipping3} alt=""  className='mx-auto'/>
                  <h3 className='font-semibold text-[14px] leading-[21px] pt-5 pb-1'>Complimentary Shipping</h3>
                  <p className='text-[14px] leading-[16.8px]'>We have 11 stores across the U.S.</p>
                  <p className='font-semibold text-[14px] leading-[21px] pt-1'>Come Say Hi</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Shipping