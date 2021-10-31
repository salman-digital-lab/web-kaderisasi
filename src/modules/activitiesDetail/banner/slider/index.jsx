/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ActivitiesDetailModuleBannerSlider = ({ images }) => {
    return (
        <div className='w-full px-3 slider'>
            <Slider
                dots={true}
                speed={500}
                arrows={true}
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
                focusOnSelect={false}
            >
                {images.map((item) => {
                    return (
                        <img
                            src={item}
                            alt='Banner'
                            className='w-full object-fill'
                        />
                    )
                })}
            </Slider>
            <style jsx>
                {`
                    .slick-prev:before,
                    .slick-next:before {
                        color: black;
                    }
                `}
            </style>
        </div>
    )
}

export default ActivitiesDetailModuleBannerSlider
