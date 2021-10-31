/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Slider from 'react-slick'

const ActivitiesDetailModuleBannerSlider = ({ images }) => {
    return (
        <div className='w-full max-w-md'>
            <Slider
                dots={true}
                speed={500}
                infinite={true}
                slidesToShow={1}
                slidesToScroll={1}
            >
                {images.map((item) => {
                    return (
                        <div>
                            <img
                                src={item}
                                alt='Banner'
                                className='w-full max-w-md'
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default ActivitiesDetailModuleBannerSlider
