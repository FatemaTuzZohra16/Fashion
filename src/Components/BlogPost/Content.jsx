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
            <div className='max-w-[1040px] mx-auto'>
                <div className='mb-[44px]'>
                    <h2 className='font-semibold text-[40px] leading-[48px] mb-[44px]'>Nail the Classics</h2>
                    <p className='max-w-[1040px] text-[24px] leading-[33px]'>Do pure winter chic with a classic cashmere white sweater. Made in the softest cashmere, it’s a sweater that will last season after season. Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make sure you keep it clean and stain free, to maintain that clean, polished look. Pair it with dark jeans or Utility Barrel pants for a casual yet refined ensemble, or layer it over a collared shirt for a preppy touch.</p>
                </div>
                <div className='mb-[44px]'>
                    <h2 className='font-semibold text-[40px] leading-[48px] mb-[44px]'>Monochromatic Magic</h2>
                    <p className='max-w-[1040px] text-[24px] leading-[33px]'>Nothing feels more luxe than an all-white winter outfit. And the best part? You don’t have to break the bank to create a super chic top-to-toe look. Pair classic corduroy pants in a modern wide-legged silhouette with a relaxed Oxford style white shirt for a mix-and-match texture play.
Extra points if you add a white blazer, cardigan, or sweater. Accessorize with subtle metallic accents or a bold red lip for a pop of color, letting your outfit take center stage.</p>
                </div>
                <div>
                    <h2 className='font-semibold text-[40px] leading-[48px] mb-[44px]'>Keep Warm in White</h2>
                    <p className='max-w-[1040px] text-[24px] leading-[33px]'>Stay warm all winter long with a white puffer jacket puffer jacket. This durable, cold weather jacket is puffed-up for extra warmth, giving an on-point blown out silhouette. A white coat not only stands out against the sea of dark winter jackets but also provides a fun canvas for experimenting with textures and patterns. Throw on a white coat over a neutral-toned outfit for an easy elegant look.</p>
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
     <div className='py-[100px]'>
        <Container>
            <div className='max-w-[1040px] mx-auto'>
                <div className='mb-[44px]'>
                    <h2 className='font-semibold text-[40px] leading-[48px] mb-[44px]'>Textures and Layers</h2>
                    <p className='max-w-[1040px] text-[24px] leading-[33px]'>Winter fashion is all about layering, and white outfits provide the perfect base for playing with textures and layers. Start with your white turtleneck and experiment with different fabrics like wool, cashmere, and silk to add depth and interest to your look. A white silk blouse layered under a chunky knit sweater or a white wool skirt paired with a turtleneck creates a textural look that's both cozy and chic.
</p>
                </div>
                <div className='mb-[44px]'>
                    <h2 className='font-semibold text-[40px] leading-[48px] mb-[44px]'>Accessorize with Neutrals</h2>
                    <p className='max-w-[1040px] text-[24px] leading-[33px]'>When working with a predominantly white palette, neutrals become your best friends. From white leather Chelsea boots to off-white beanies mix in plenty of winter-ready accessories and shoes for those finishing outfit tonal touches.
<br/><br/>
So, step into the season with confidence, and let your winter whites make a bold and beautiful statement. Shop our winter white edit here.
</p>
                </div>
            </div>
        </Container>
    </div>
   </>
  )
}

export default Content