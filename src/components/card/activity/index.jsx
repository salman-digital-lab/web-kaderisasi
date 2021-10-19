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
    return (
        <div
            style={{ width: '270px' }}
            className='p-2 flex flex-col justify-between gap-4 border-2 border-bmka-primary-blue rounded'
        >
            <div className='flex flex-col gap-4'>
                <img
                    src={banner}
                    alt='Activity Banner'
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
                <Link href={`/activity/${slug}`}>
                    <Button type='button' className='w-full' variant='primary'>
                        Daftar
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ActivityCard
