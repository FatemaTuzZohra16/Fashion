import React from 'react'
import Container from '../Layout/Container'
import gift1 from '../../assets/gift1.png'
import gift2 from '../../assets/gift2.png'

const HolidayGift = () => {
  return (
    <div>
        <Container>
            <div className='border-t'>
                <div className='flex gap-[20px] py-[90px] justify-center'>
                <div>
                    <h4 className='text-[24px] leading-[33px] mb-5 text-center'>Our Holiday Gift Picks</h4>
                    <img src={gift2} alt="" />
                    <p className='text-[14px] leading-[16.18px] py-[20px] text-center'>The best presents for everyone on your list.</p>
                    <div className='py-[15px] px-[210.5px]'>
                        <button className='text-[14px] leading-[20px] text-center cursor-pointer inline-block border-b-2 border-black w-fit'>Learn More</button>
                    </div>
                </div>
                <div>
                    <h4 className='text-[24px] leading-[33px] mb-5 text-center'>Cleaner Fashion</h4>
                    <img src={gift1} alt="" />
                    <p className='text-[14px] leading-[16.18px] py-[20px] text-center'>See the sustainability efforts behind each of our products.</p>
                    <div className='py-[15px] px-[210.5px]'>
                        <button className='text-[14px] leading-[20px] text-center cursor-pointer inline-block border-b-2 border-black w-fit'>Learn More</button>
                    </div>
                </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default HolidayGift