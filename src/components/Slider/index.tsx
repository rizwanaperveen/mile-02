'use client';
import { Component, ReactNode } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../../../public/slideShow1.jpg";
import Image2 from "../../../public/slideShow2.jpg";
import Image3 from "../../../public/slideShow3.jpg";
import Image4 from "../../../public/slideShow4.jpg";
import Image5 from "../../../public/slideShow5.jpg";
import Image6 from "../../../public/slideShow6.jpg";
import Image7 from "../../../public/slideShow7.jpg";
import Image8 from "../../../public/slideShow8.jpg";
import Image from 'next/image';

export default class ImageSlider extends Component {
    render(): ReactNode{
        let data = [
            {
                img : Image1,
                title : 'Student Learning the web 3.0 course'
            },
            {
                img : Image2,
                title : 'First meeting with the Governor'
            },
            {
                img : Image3,
                title : 'President launching event'
            },
            {
                img : Image4,
                title : 'President launching event'
            },
            {
                img : Image5,
                title : 'President launching the first website'
            },
            {
                img : Image6,
                title : 'president launching event'
            },
            {
                img : Image7,
                title : 'President launching the first website'
            },
            {
                img : Image8,
                title : 'President launching event'
            }
        ]

        const settings = {
            dots: true,
            dotsClass: "slick-dots line-indicator",
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ],

            customPaging: (i: number) => (
                <div className='mt-2 text-xs opacity-0'>{i}</div>
            ),
        };
         return(
            <div className='mt-10 w-full'>
                <Slider {...settings} className='w-full'>
                    {
                    data.map((val, index) => {
                      return(
                        <div className='px-3 xl-lg:px-3 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none' key={index}>
                            <div className='relative bg-slate-900 rounded-lg overflow-hidden'>
                                <Image src={val.img} className='w-full h-[400px] md:h[600px] object-cover' alt={val.title}/>
                            </div>
                            </div>
                      )
                    })
                    }
                    </Slider>
            </div>
         )
    }
}