import React from 'react'
import Container from '../Layout/Container'
import everlane1 from '../../assets/everlane1.png'
import everlane2 from '../../assets/everlane2.png'
import everlane3 from '../../assets/everlane3.png'
import everlane4 from '../../assets/everlane4.png'
import everlane5 from '../../assets/everlane5.png'
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
const Everlane = () => {
     var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
  return (
    <div className='pt-[90px]'>
        <Container>
            <div className='text-center'>
                <h2 className='text-[32px] leading-[40px] mb-[25px]'>Everlane On You</h2>
                <p className='text-[14px] leading-[16.8px] mb-1'>Share your latest look with #EverlaneOnYou for a chance to be featured.</p>
                <p className='text-[14px] leading-[20px] mb-[12px] tracking-[1.5px]'>Add Your Photo</p>
            </div>
          <Slider {...settings}>
  {[everlane1, everlane2, everlane3, everlane4, everlane5, everlane1].map(
    (img, index) => (
      <div key={index} className="px-2">
        <img src={img} alt="" />
      </div>
    )
  )}
</Slider>

        </Container>
    </div>
  )
}

export default Everlane