import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
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
const Favorites = () => {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
    <ul className="flex justify-center space-x-2">
      {dots.slice(0, 4)}
    </ul>
  ),
    };
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <div className='font-primary pt-[90px] pb-[93px]'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-[24px] leading-[33px]'>Everlane Favorites</h2>
                    <p className='text-[16px] leading-[24px] pt-3 pb-[30px]'>Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
                </div>
                <Slider {...settings} >
                        {
                            products.map((item) => (
                                <div>
                                    <img src={item.images?.[0]} alt={item.title} className='w-[320px] h-[460px]' />
                                    <h2 className='w-[300px] text-[14px] leading-[16px] mt-[6px] mb-[3px]'>{item.title}</h2>
                                    <p className='text-[12px] leading-[16px]'>${item.price}</p>
                                </div>
                            ))
                        }
                </Slider>
            </Container>
        </div>
    )
}

export default Favorites