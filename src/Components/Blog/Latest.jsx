import React from 'react'
import Container from '../Layout/Container'
import latest1 from '../../assets/latest1.png'
import latest2 from '../../assets/latest2.png'
import latest3 from '../../assets/latest3.png'
import latest4 from '../../assets/latest4.png'
import latest5 from '../../assets/latest5.png'
import latest6 from '../../assets/latest6.png'
import { Link } from 'react-router'

const Latest = () => {
    const LatestData = [
        {
            img: latest1,
            title: 'How To Style Winter Whites',
            button: 'Style'
        },
        {
            img: latest2,
            title: 'We Won A Glossy Award',
            button: 'Transparency'
        },
        {
            img: latest3,
            title: 'Coordinate Your Style: Matching Outfits for Everyone',
            button: 'Style'
        },
        {
            img: latest4,
            title: 'Black Friday Fund 2023',
            button: 'Transparency'
        },
        {
            img: latest5,
            title: 'What to Wear this Season: Holiday Outfits & Ideas',
            button: 'Style'
        },
        {
            img: latest6,
            title: 'Thanksgiving Outfit Ideas',
            button: 'Style'
        },
    ]
  return (
    <div className='py-[120px]'>
        <Container>
            <div>
                <h2 className='font-semibold text-[54px] leading-[72px] mb-3'>The Latest</h2>
                <div className='flex flex-wrap gap-y-[200px] justify-between'>
                    {
                        LatestData.map((item)=>(
                            <div className=''>
                                <img src={item.img} alt="" />
                                <h2 className='text-[32px] leading-[40px] mt-5 mb-3 max-w-[418px]'>{item.title}</h2>
                                <button className='border border-[#dddbdc] rounded-[30px] font-semibold text-[12px] leading-[16px] py-1 px-5'>{item.button}</button>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center mt-10'>
                    <Link to='/blogPost' className='bg-black text-white text-[14px] leading-[21px] py-5 px-[57px] rounded-[8px]'>Load more Articals</Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Latest