/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */

import React from 'react'

import { formatDate } from '@utils'
import { ActivityCard } from '@components'

const ActivitiesModuleList = ({ activityData }) => {
    return (
        <div
            className='w-full grid gap-4 my-8'
            style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            }}
        >
            {activityData.map((item, index) => {
                const { name, banner, created_at, register_end_date } = item

                return (
                    <div className='flex justify-center'>
                        <ActivityCard
                            key={index}
                            name={name}
                            banner={banner}
                            createdAt={formatDate(created_at)}
                            registerEndDate={formatDate(register_end_date)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ActivitiesModuleList
