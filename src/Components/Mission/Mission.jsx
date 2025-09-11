import React from 'react'
import Container from '../Layout/Container'
import mission from '../../assets/mission.png'

const Mission = () => {
  return (
    <div className='font-primary py-[90px]'>
        <Container>
            <div className='relative bg-cover bg-center h-[281px]'
            style={{backgroundImage: `url(${mission})`}}
            >
               <div className='absolute flex flex-col items-center justify-center inset-0 py-[72px]'>
                <h3 className='text-[32px] leading-[40px] text-white'>We’re on a Mission To Clean Up the Industry</h3>
                <p className='text-[16px] leading-[24px] text-white pt-3 pb-5'>Read about our progress in our latest Impact Report.</p>
                 <button className='text-[14px] leading-[16px] py-3 px-[72px] bg-white'>LEARN MORE</button>
               </div>
            </div>
        </Container>
    </div>
  )
}

export default Mission