import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import Nav from '../About/Nav'

const Stores = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
  return (
   <>
   <Nav />
    <div>
        <Container>
            <div className='text-center'>
                <h2 className='text-[32px] leading-[40px] mt-[30px] mb-4'>Stores</h2>
                <p className='text-[16px] leading-[24px] mb-[64px]'>Find one of our 11 stores nearest you.</p>
            </div>
            <div className='mb-[64px]'>
                <div className='flex flex-wrap gap-x-[45px] gap-y-[64px]'>
                   {
                    products.map((item)=>(
                        <div className='max-w-[400px]'>
                            <div className='bg-[#f5f4f4] px-[40px] py-[40px] rounded-[10px]'>
                                <img src={item.image} alt=""  className=' w-full h-[280px]'/>
                            <h2 className='pt-2 pb-1 text-[10px] leading-[16px]'>{item.category}</h2>
                            <p className='text-[16px] leading-[24px]'>{item.title}</p>
                            </div>
                        </div>
                    ))
                   } 
                </div>
            </div>
        </Container>
    </div>
   </>
  )
}

export default Stores