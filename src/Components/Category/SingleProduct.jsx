import Container from '../Layout/Container'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [activeImg, setActiveImg] = useState("")

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setActiveImg(data.images?.[0])
      })
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div className='py-[80px]'>
      <Container>
        <div className='flex justify-between'>
          {/* Image Section */}
          <div className='flex gap-5'>
            <div className='flex flex-col gap-3'>
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImg(img)}
                  className='w-[700px] object-cover cursor-pointer'
                />
              ))}
            </div>
            <div className=''>
              <img
              src={activeImg}
              className='w-[2195px] object-cover'
            />
            </div>
          </div>

          {/* Details Section */}
          <div className='ml-20'>
            <h1 className='text-[24px] leading-[33px]'>{product.title}</h1>
            <p className='text-xl mt-3'>${product.price}</p>
            <p className='mt-4 text-[14px] leading-[18px]'>{product.description}</p>
            <p className='mt-2 text-sm font-bold'>
              Category: {product.category?.name}
            </p>
            <div className='mt-5'>
              <h4 className='font-semibold text-[12px] leading-[16px]'>Size</h4>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default SingleProduct