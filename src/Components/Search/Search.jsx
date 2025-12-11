import React from 'react'
import Container from '../Layout/Container'
import search1 from '../../assets/search1.png'
import search2 from '../../assets/search2.png'
import search3 from '../../assets/search3.png'
import search4 from '../../assets/search4.png'

const Search = () => {
  return (
    <div>
        <Container>
            <div className='flex justify-center border-t border-b border-[#eeeded]'>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>Holiday Gifting</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>New Arrivals</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>Best-Sellers</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>Clothing</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>Tops & Sweaters</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>Pants & Jeans</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>Outerwear</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px]'>Shoes & Bags</p>
                <p className='text-[12px] leading-[16px] py-[20px] px-[12px] text-[#d0021b]'>Sale</p>
            </div>
            <div className='flex justify-center py-[25px] border-b border-[#eeeded]'>
                <input 
                placeholder='Search'
                className='w-[678px] text-[12px] leading-[16px] py-[16px] pl-[16px] text-[#737373] bg-[#f5f4f4] outline-0'
                />
                <button className='text-[12px] leading-[16px] p-4 text-[#737373]'>Cancel</button>
            </div>
            <div className='py-[32px]'>
                <h3 className='text-[14px] leading-[16.8px] mb-4 pl-[115px]'>Popular Categories</h3>
                <div className="flex justify-center gap-5">
                    <div>
                        <img src={search1} alt="" />
                        <p className='text-[16px] leading-[24px] mt-[10px]'>Women’s Sweaters</p>
                    </div>
                    <div>
                        <img src={search2} alt="" />
                        <p className='text-[16px] leading-[24px] mt-[10px]'>Women’s Bottom</p>
                    </div>
                    <div>
                        <img src={search3} alt="" />
                        <p className='text-[16px] leading-[24px] mt-[10px]'>Women’s Boots</p>
                    </div>
                    <div>
                        <img src={search4} alt="" />
                        <p className='text-[16px] leading-[24px] mt-[10px]'>Men’s Best Sellers</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Search