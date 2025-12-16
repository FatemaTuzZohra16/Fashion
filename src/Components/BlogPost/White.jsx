import React from 'react'
import Container from '../Layout/Container'
import white1 from '../../assets/white1.png'
import white2 from '../../assets/white2.png'
import white3 from '../../assets/white3.png'
import white4 from '../../assets/white4.png'
import white5 from '../../assets/white5.png'
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
            style={{ ...style, width: "40px", height: "40px", right: "-50px" }}
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
            style={{ ...style, width: "40px", height: "40px", left: "-50px" }}
            onClick={onClick}
        >
            <GrFormPrevious size={40} className="text-black text-2xl" />
        </div>
    );
}

const White = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const whiteData = [
        {
            img: white1,
            title: 'The Cashmere Boxy Crew Sweater',
            price: '$139',
            button: 'Bone'
        },
        {
            img: white2,
            title: 'The Corduroy Wide-Leg Pant',
            price: '$69',
            button: 'Canvas'
        },
        {
            img: white3,
            title: 'The Organic Cotton Chunky Beanie',
            price: '$32',
            button: 'Canvas'
        },
        {
            img: white4,
            title: 'The Chelsea Boot',
            price: '$137',
            button: 'Off-White'
        },
        {
            img: white2,
            title: 'The Re:Down@Puffer',
            price: '$139',
            button: 'Bone'
        },
    ]
    return (
        <div className='py-[60px]'>
            <Container>
                <div className='text-center'>
                    <h2 className='font-semibold text-[40px] leading-[48px] mb-10'>The White Whites Edit</h2>
                    <div>
                        <Slider {...settings}>
                            {
                                whiteData.map((item) => (
                                    <div className='px-3'>
                                        <img src={item.img} alt=""   className="w-full block"/>
                                        <div className='flex justify-between'>
                                            <h3 className='text-[12px] leading-[16px]'>{item.title}</h3>
                                            <p className='text-[12px] leading-[16px]'>{item.price}</p>
                                        </div>
                                        <p className='text-[12px] leading-[16px] text-start mt-1'>{item.button}</p>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default White