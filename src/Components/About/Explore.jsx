import React from 'react'
import Container from '../Layout/Container'
import explore1 from '../../assets/explore1.png'
import explore2 from '../../assets/explore2.png'
import explore3 from '../../assets/explore3.png'

const Explore = () => {
  return (
    <div className='py-[82px]'>
        <Container>
            <div className='text-center'>
                <h2 className='text-[32px] leading-10 mb-5'>More to Explore</h2>
                <div className="flex gap-5 justify-center">
                    <div>
                        <img src={explore1} alt="" />
                        <h3 className='font-semibold text-[16px] leading-[24px] mt-[10px]'>Our Products</h3>
                    </div>
                    <div>
                        <img src={explore2} alt="" />
                        <h3 className='font-semibold text-[16px] leading-[24px] mt-[10px]'>Our Stores</h3>
                    </div>
                    <div>
                        <img src={explore3} alt="" />
                        <h3 className='font-semibold text-[16px] leading-[24px] mt-[10px]'>Careers</h3>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Explore