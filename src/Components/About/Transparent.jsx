import React from 'react'
import transparent from '../../assets/transparent.png'
import Container from '../Layout/Container'

const Transparent = () => {
  return (
    <div>
         <Container>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={transparent} alt="" />
                </div>
                <div>
                    <h5 className='font-semibold text-[12px] leading-4'>OUR PRICES</h5>
                    <h2 className='text-[40px] leading-[48px] mb-5'>Radically Transparent.</h2>
                    <p className='max-w-[560px] text-[14px] leading-[16.8px] '>We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Transparent