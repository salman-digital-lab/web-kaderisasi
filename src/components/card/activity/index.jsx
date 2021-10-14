/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Link, Button } from '@components'

const ActivityCard = ({
    slug,
    name,
    banner,
    created_at,
    register_end_date,
}) => {
    return (
        <div>
            <img src={banner} alt='Activity Banner' />
            <p>{name}</p>
            <p>Tutup: {register_end_date}</p>
            <p>Posted on {created_at}</p>
            <Link href={`/activity/${slug}`}>
                <Button type='button' variant='primary'>
                    Daftar
                </Button>
            </Link>
        </div>
    )
}

export default ActivityCard
