import React from 'react'
import Container from '../Layout/Container'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import content1 from '../../assets/content1.png'
import content2 from '../../assets/content2.png'

const Content = () => {
  return (
   <>
    <div className='py-[115px]'>
        <Container>
            <div className=' border-t-[14px]'>
                <div className='flex gap-[98px] mt-10'>
                    <div className='flex gap-[6px]'>
                        <FaTwitterSquare  size={28}/>
                        <FaFacebookSquare  size={28}/>
                        <FaLinkedin  size={28}/>
                    </div>
                    <p className='font-semibold text-[40px] leading-[48px]'>In a season dominated by dark hues, redefine your winter wardrobe with the timeless elegance of winter whites. Whether top-to-toe white outfits, tonal mixing-and-matching, or a key white piece (or two), give your style a breath of fresh air with this list of winter white closet essentials.</p>
                </div>
            </div>
        </Container>
    </div>
    <div className='py-[100px]'>
        <Container>
            <div className='flex justify-center'>
                <img src={content1} alt="" />
            </div>
        </Container>
    </div>
    <div className='py-[100px]'>
        <Container>
            <div className='mx-w-[1040px] mx-auto'>
                <div>
                    <h2 className='font-semibold text-[40px] leading-[48px] mb-[44px]'>Nail the Classics</h2>
                    <p className='max-w-[1040px] text-[24px] leading-[33px]'>Do pure winter chic with a classic cashmere white sweater. Made in the softest cashmere, it’s a sweater that will last season after season. Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make sure you keep it clean and stain free, to maintain that clean, polished look. Pair it with dark jeans or Utility Barrel pants for a casual yet refined ensemble, or layer it over a collared shirt for a preppy touch.</p>
                </div>
            </div>
        </Container>
    </div>
    <div className='py-[100px]'>
        <Container>
            <div className='flex justify-center'>
                <img src={content2} alt="" />
            </div>
        </Container>
    </div>
   </>
  )
}

export default Content