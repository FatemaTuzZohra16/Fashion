import React from 'react'
import Container from '../Layout/Container'
import img from '../../assets/image.png'
import img1 from '../../assets/image (1).png'
import img2 from '../../assets/image (2).png'
import { IoIosStar } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !bg-transparent !rounded-full`}
      style={{ ...style, width: "40px", height: "40px", right:"-50px" }}
      onClick={onClick}
    >
      <MdNavigateNext size={40} className="text-black text-2xl" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex !items-center !justify-center !bg-transparent !rounded-full`}
      style={{ ...style, width: "40px", height: "40px", left:"-50px" }}
      onClick={onClick}
    >
      <GrFormPrevious size={40} className="text-black text-2xl" />
    </div>
  );
}

const Review = () => {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
    <ul className="flex justify-center space-x-2">
      {dots.slice(0, 4)}
    </ul>
  ),
    };
    const reviewData = [
        {
            title: "People Are Talking",
            description: `“Love this shirt! Fits perfectly and the fabric is thick without 
being stiff.”`,
            para: '-- JonSnSF, The Heavyweight Overshirt',
            img: img
        },
        {
            title: "People Are Talking",
            description: `“Love this shirt! Fits perfectly and the fabric is thick without 
being stiff.”`,
            para: '-- JonSnSF, The Heavyweight Overshirt',
            img: img1
        },
        {
            title: "People Are Talking",
            description: `“Love this shirt! Fits perfectly and the fabric is thick without 
being stiff.”`,
            para: '-- JonSnSF, The Heavyweight Overshirt',
            img: img2
        },
    ]
  return (
    <div className='mb-[80px]'>
        <Container>
            <div>
                <Slider {...settings} >
                {
                    reviewData.map((item)=>(
                        <div>
                            <div className='flex justify-between items-center mb-[30px]'>
                            <div className='px-[62px]'>
                                <h3 className='font-normal text-[16px] leading-[24px] mb-[40px]'>{item.title}</h3>
                                <div className='flex'>
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </div>
                                <p className='max-w-[390px] font-normal text-[24px] leading-[33.2px] mt-[15px] mb-[40px]'>{item.description}</p>
                                <p>{item.para}</p>
                            </div>
                            <div>
                                <img src={item.img} alt=""  className='w-[530px] h-[695px]'/>
                            </div>
                        </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </Container>
    </div>
  )
}

export default Review