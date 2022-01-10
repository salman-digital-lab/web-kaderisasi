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
                className='w-full'
                slidesToScroll={1}
                focusOnSelect={false}
            >
                {images.length > 0 ? (
                    images.map((image) => (
                        <div key={image}>
                            <img
                                src={image}
                                alt='Activity Banner'
                                className='w-full object-contain'
                            />
                        </div>
                    ))
                ) : (
                    <img
                        src='/assets/image_activities_placeholder.png'
                        alt='Activity Banner'
                        className='w-full object-contain'
                    />
                )}
            </Slider>
        </div>
    )
}

export default ActivitiesDetailModuleBannerSlider
