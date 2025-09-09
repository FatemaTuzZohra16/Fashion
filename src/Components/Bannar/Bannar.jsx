import React from 'react'
import Container from '../Layout/Container'
import bannar from '../../assets/bannar.png'

const Bannar = () => {
    return (
        <div className='relative bg-cover bg-center text-white font-primary'
            style={{ backgroundImage: `url(${bannar})` }}
        >
            <Container>
                <div className='py-[275px] pl-8'>
                    <h3 className='text-[46px] leading-[55px]'>Your Cozy Era</h3>
                    <p className='text-[24px] leading-[33px] mt-[14px] mb-[30px]'>Get peak comfy-chic <br/>
                        with new winter essentials.</p>
                        <button className='bg-white text-black py-3 px-[80px] text-[14px] leading-[16px]'>SHOP NOW</button>
                </div>
            </Container>
        </div>
    )
}

export default Bannar