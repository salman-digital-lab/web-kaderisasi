/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Link, Button } from '@components'
import { getActivityCategoryID } from '@utils'

const ActivityCard = ({
    slug,
    role,
    name,
    banner,
    categoryId,
    registerEndDate,
    activityCategoryData,
}) => {
    const imageOnErrorHandler = (e) => {
        e.target.src = '/assets/image_activities_placeholder.png'
    }

    return (
        <div
            style={{ width: '270px' }}
            className='p-2 flex flex-col justify-between gap-4 border-2 bg-white cursor-default border-bmka-primary-blue rounded'
        >
            <div className='flex flex-col gap-4'>
                <img
                    src={banner}
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
