import React from 'react'
import Container from '../Layout/Container'

const Follow = () => {
  return (
    <div className='bg-black py-[90px]'>
        <Container>
            <div>
                <h2 className='font-semibold text-[54px] leading-[72px] mb-[32px] text-white'>Follow us on social for more</h2>
                <div>
                    <button className='font-semibold text-[14px] leading-[21px] rounded-[8px] bg-white py-5 px-[50px]'>@Everlane Instagram</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Follow