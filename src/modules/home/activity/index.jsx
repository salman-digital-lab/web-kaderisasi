/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */

import React from 'react'

import { formatDate } from '@utils'
import {
    Link,
    Button,
    ActivityCard,
    CardCarousell,
    ComponentWrapper,
} from '@components'

const Activity = ({ dataActivity }) => {
    return (
        <div>
            <CardCarousell title='Kegiatan Terkini'>
                {dataActivity.map((item, index) => {
                    const { name, banner, created_at, register_end_date } = item

                    return (
                        <ActivityCard
                            key={index}
                            name={name}
                            banner={banner}
                            createdAt={formatDate(created_at)}
                            registerEndDate={formatDate(register_end_date)}
                        />
                    )
                })}
                <div />
            </CardCarousell>
            <ComponentWrapper>
                <div className='mt-12 text-center'>
                    <Link href='/activities'>
                        <Button
                            textClassName='font-extrabold text-bmka-accent-orange'
                            className='border-2 border-bmka-accent-orange rounded'
                        >
                            Lihat Selengkapnya
                        </Button>
                    </Link>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default Activity
