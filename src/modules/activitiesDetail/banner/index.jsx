/* eslint-disable react/jsx-boolean-value */
/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { formatDate, getActivityCategoryID } from '@utils'

import ActivitiesDetailModuleBannerSlider from './slider'

const ActivitiesDetailModuleBanner = ({
    status,
    images,
    closeDate,
    categoryID,
    activityCategory,
}) => {
    return (
        <div className='w-full max-w-lg p-6 rounded transform -translate-y-16 mx-auto bg-white shadow-level-1'>
            <div className='w-full'>
                <ActivitiesDetailModuleBannerSlider images={images} />
            </div>
            <div className='w-full flex justify-between mt-12'>
                <div>
                    <p className='text-gray-500 text-sm'>Kategori</p>
                    <p className='text-lg font-bold text-bmka-primary-blue'>
                        {getActivityCategoryID({
                            activityCategoryID: categoryID,
                            activityCategoryData: activityCategory,
                        })}
                    </p>
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>Status</p>
                    <p className='text-lg font-bold text-bmka-primary-blue'>
                        {status}
                    </p>
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>Tutup Pendaftaran</p>
                    <p className='text-lg font-bold text-bmka-primary-blue'>
                        {formatDate(closeDate)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesDetailModuleBanner
