/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Link, Button } from '@components'

const ActivityCard = ({ slug, name, banner, registerEndDate }) => {
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
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-sm'>Tutup: {registerEndDate}</p>

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
