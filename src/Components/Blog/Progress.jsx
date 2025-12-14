import React from 'react'
import Container from '../Layout/Container'
import progress from '../../assets/progress.png'
import progress2 from '../../assets/progress2.png'
import progress3 from '../../assets/progress3.png'

const Progress = () => {
  return (
    <div className='py-[120px]'>
        <Container>
            <div>
                <h2 className='font-semibold text-[54px] leading-[72px] mb-3'>Our Progress</h2>
               <div className='flex justify-between'>
                 <div>
                    <img src={progress} alt="" />
                    <h3 className='text-[32px] leading-[40px] mt-3'>Carbon Commitment</h3>
                </div>
                <div>
                    <img src={progress2} alt="" />
                    <h3 className='text-[32px] leading-[40px] mt-3'>Environmental Initiatives</h3>
                </div>
                <div>
                    <img src={progress3} alt="" />
                    <h3 className='text-[32px] leading-[40px] mt-3'>Better Factories</h3>
                </div>
               </div>
            </div>
        </Container>
    </div>
  )
}

export default Progress