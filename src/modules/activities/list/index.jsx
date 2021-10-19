/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */

import React from 'react'

import { formatDate } from '@utils'
import { ActivityCard } from '@components'

const ActivitiesModuleList = ({ activityData, activityCategoryData }) => {
    return (
        <div
            className='w-full grid gap-4 my-8'
            style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            }}
        >
            {activityData.map((item, index) => {
                const {
                    name,
                    role,
                    slug,
                    banner,
                    created_at,
                    category_id,
                    register_end_date,
                } = item

                return (
                    <div key={index} className='flex justify-center'>
                        <ActivityCard
                            name={name}
                            role={role}
                            slug={slug}
                            banner={banner}
                            categoryId={category_id}
                            createdAt={formatDate(created_at)}
                            activityCategoryData={activityCategoryData}
                            registerEndDate={formatDate(register_end_date)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ActivitiesModuleList
