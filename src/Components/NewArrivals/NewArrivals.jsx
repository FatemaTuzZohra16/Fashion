import React from 'react'
import Container from '../Layout/Container'
import arrival1 from '../../assets/arrival1.png'
import arrival2 from '../../assets/arrival2.png'
import arrival3 from '../../assets/arrival3.png'
const NewArrivals = () => {
    const Arrival = [
        {
        img: arrival1,
        title:" New Arrivals",
        button:" SHOP THE LATEST"
        },
        {
        img: arrival2,
        title:" Best-Sellers",
        button:" SHOP YOUR FAVORITES"
        },
        {
        img: arrival3,
        title:"The Holiday Outfit",
        button:" SHOP OCCASION"
        },
]
  return (
    <div>
        <Container>
            <div className='flex justify-between font-primary'>
                {
                    Arrival.map((item) =>(
                        <div className='relative'>
                           <div>
                             <img src={item.img} alt="" />
                           </div>
                           <div className='absolute inset-0 flex flex-col items-center justify-center'>
                             <h2 className='text-white text-[40px] leading-[48px]'>{item.title}</h2>
                            <button className='text-[14px] leading-[16px] py-3 px-8 bg-white mt-[23px]'>{item.button}</button>
                           </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default NewArrivals