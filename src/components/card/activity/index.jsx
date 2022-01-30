/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Link, Button } from '@components'
import { getActivityCategoryID } from '@utils'

const ActivityCard = ({
    slug,
    role,
    name,
    banner,
    fullWidth,
    categoryId,
    registerEndDate,
    activityCategoryData,
    ...props
}) => {
    const BASE_URL_ACTIVITY_IMAGE =
        process.env.NEXT_PUBLIC_BASE_URL_ACTIVITY_IMAGE

    const imageOnErrorHandler = (e) => {
        e.target.src = '/assets/image_activities_placeholder.png'
    }

    return (
        <div
            style={!fullWidth ? { width: '270px' } : { width: '100%' }}
            className='p-2 flex flex-col justify-between gap-4 border-2 bg-white cursor-default border-bmka-primary-blue rounded'
        >
            <div className='flex flex-col gap-4'>
                <img
                    src={`${BASE_URL_ACTIVITY_IMAGE}/${banner}`}
                    alt='Activity Banner'
                    onError={imageOnErrorHandler}
                    className='w-full h-48 object-cover rounded'
                />
                <p className='font-bold'>{name}</p>
                <p className='text-bmka-primary-blue font-bold'>
                    {getActivityCategoryID({
                        activityCategoryData,
                        activityCategoryID: categoryId,
                    })}
                </p>
                {props?.status && (
                    <div className='flex gap-1'>
                        <p className='font-bold'>Status : </p>
                        <p className='text-bmka-primary-blue font-semibold'>
                            {props.status}
                        </p>
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <p className='text-sm'>Untuk {role}</p>
                    <p className='text-sm'>Tutup: {registerEndDate}</p>
                </div>
                <Link href={`/activities/${slug}`}>
                    <Button type='button' className='w-full' variant='primary'>
                        Lihat
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ActivityCard
