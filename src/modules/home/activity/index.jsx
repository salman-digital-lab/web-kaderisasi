/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */

import React from 'react'

import { formatDate } from '@utils'
import { ActivityCard, CardCarousell } from '@components'

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
        </div>
    )
}

export default Activity
