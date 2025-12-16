import React from 'react'
import Container from '../Layout/Container'
import latest1 from '../../assets/latest1.png'
import latest2 from '../../assets/latest2.png'
import latest3 from '../../assets/latest3.png'

const Style = () => {
     const StyleData = [
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
    ]
  return (
    <div>
        <Container>
            <div>
                <div className='flex flex-wrap gap-y-[200px] justify-between'>
                {
                        StyleData.map((item)=>(
                            <div className=''>
                                <img src={item.img} alt="" />
                                <h2 className='text-[28px] leading-[40px] mt-5 mb-3 max-w-[418px]'>{item.title}</h2>
                                <button className='border border-[#dddbdc] rounded-[30px] font-semibold text-[12px] leading-[16px] py-1 px-5'>{item.button}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Style