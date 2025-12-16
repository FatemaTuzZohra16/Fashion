import React from 'react'
import Container from '../Layout/Container'
import blogHero from '../../assets/blogHero.png'
import Content from './Content'
import White from './White'

const BlogPost = () => {
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${blogHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <Container>
            <div className='pt-[500px] pb-[70px]'>
                <button className='text-[12px] leading-[16px] border border-white text-white py-2 px-5 rounded-[30px]'>Style</button>
                <h2 className='font-semibold text-[64px] leading-[72px] mt-[10px] mb-[18px] text-white'>Style<br/> How To Style Winter <br/> Whites</h2>
                <p className='text-[24px] leading-[33px] text-white'>Redefine your winter wardrobe with the timeless elegance of winter whites with this <br/> style guide.</p>
            </div>
        </Container>
    </div>
    <Content />
    <White />
    </>
  )
}

export default BlogPost