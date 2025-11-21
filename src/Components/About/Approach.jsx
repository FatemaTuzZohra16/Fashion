import React from 'react'
import Container from '../Layout/Container'
import approach from '../../assets/approach.png'

const Approach = () => {
  return (
    <div className='font-primary'>
        <Container>
            <div className='flex justify-between items-center bg-[#e6ded8]'>
                <div>
                    <img src={approach} alt="" />
                </div>
                <div>
                    <h5 className='font-semibold text-[12px] leading-4'>OUR FACTORIES</h5>
                    <h2 className='text-[40px] leading-[48px] mb-5'>Our ethical approach.</h2>
                    <p className='max-w-[560px] text-[14px] leading-[16.8px] '>We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Approach