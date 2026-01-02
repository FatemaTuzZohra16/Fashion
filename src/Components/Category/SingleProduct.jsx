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
        <div className='flex gap-10'>
          
          {/* Image Section */}
          <div className='flex gap-4'>
            <div className='flex flex-col gap-3'>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImg(img)}
                  className='w-[70px] h-[70px] object-cover cursor-pointer border'
                />
              ))}
            </div>

            <img
              src={activeImg}
              className='w-[400px] h-[400px] object-cover'
            />
          </div>

          {/* Details Section */}
          <div>
            <h1 className='text-2xl font-semibold'>{product.title}</h1>
            <p className='text-xl mt-3'>${product.price}</p>
            <p className='mt-4 text-gray-600'>{product.description}</p>
            <p className='mt-2 text-sm'>
              Category: {product.category?.name}
            </p>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default SingleProduct