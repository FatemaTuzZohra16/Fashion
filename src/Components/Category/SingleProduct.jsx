import Container from '../Layout/Container'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import img from '../../assets/img.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'

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
              <div className='flex gap-[12px] mt-3'>
                <div className='w-[45px] h-[40px] bg-[#f5f4f4]'><p className='text-[12px] leading-[16px] py-3 text-center'>XS</p></div>
                <div className='w-[45px] h-[40px] bg-[#f5f4f4]'><p className='text-[12px] leading-[16px] py-3 text-center'>S</p></div>
                <div className='w-[45px] h-[40px] bg-[#f5f4f4]'><p className='text-[12px] leading-[16px] py-3 text-center'>M</p></div>
                <div className='w-[45px] h-[40px] bg-[#f5f4f4]'><p className='text-[12px] leading-[16px] py-3 text-center'>L</p></div>
                <div className='w-[45px] h-[40px] bg-[#f5f4f4]'><p className='text-[12px] leading-[16px] py-3 text-center'>XL</p></div>
                <div className='w-[45px] h-[40px] bg-[#f5f4f4]'><p className='text-[12px] leading-[16px] text-center py-3'>XXL</p></div>
              </div>
              <div className='mt-[55px] bg-black text-center'>
                <button className='text-white py-3'>ADD TO BAG</button>
              </div>
            </div>
            <div className='pt-[60px]'>
              <div className='flex gap-[16px]'>
                <img src={img} alt="" />
                <div>
                  <h3 className='font-semibold text-[14px] leading-[21px]'>Free Shipping</h3>
                  <p className='text-[12px] leading-[16px]'>On all U.S. orders over $100 Learn more.</p>
                </div>
              </div>
              <div className='flex gap-[16px] py-[24px]'>
                <img src={img1} alt="" />
                <div>
                  <h3 className='font-semibold text-[14px] leading-[21px]'>Easy Returns</h3>
                  <p className='text-[12px] leading-[16px]'>Extended returns through January 31. Returns Details.</p>
                </div>
              </div>
              <div className='flex gap-[16px]'>
                <img src={img2} alt="" />
                <div>
                  <h3 className='font-semibold text-[14px] leading-[21px]'>Send It As A Gift</h3>
                  <p className='text-[12px] leading-[16px]'>Add a free personalized note during checkout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SingleProduct