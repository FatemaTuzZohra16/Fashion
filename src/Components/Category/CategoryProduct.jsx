import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import { useParams } from 'react-router'

const CategoryProduct = () => {
        const {id} = useParams()
        const cleanId = id.replace(/[()]/g, "") 
        const [products, setProducts] = useState([])
        useEffect(()=>{
            fetch(`https://api.escuelajs.co/api/v1/categories/${cleanId}/products`)
            .then((res)=>res.json())
              .then((data) => {
        // ekhane check korchi data array kina
        if (Array.isArray(data)) {
          setProducts(data)
        } else {
          setProducts([]) 
        }
      })
        },[id])
  return (
    <div className='py-[80px] font-primary'>
        <Container>
            <div className='flex flex-wrap items-center gap-8'>
                {
                    products.map((product)=>(
                        <div className='w-[300px] H-[600PX] shadow-lg py-10'>
                            <img src={product.images[0]} alt="" />
                            <div className='flex justify-between items-center mt-3 mx-2'>
                            <h1 className='text-[14px] leading-[20px]'>{product.title}</h1>
                            <p>{product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default CategoryProduct