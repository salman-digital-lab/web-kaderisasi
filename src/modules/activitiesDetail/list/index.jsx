/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */

import React from 'react'

import { formatDate } from '@utils'
import { ActivityCard, CardCarousell } from '@components'

const ActivitiesDetailModuleList = ({ activityData, activityCategoryData }) => {
    return (
        <div>
            <CardCarousell title='Kegiatan Lainnya'>
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
                        <ActivityCard
                            key={index}
                            name={name}
                            role={role}
                            slug={slug}
                            banner={banner}
                            categoryId={category_id}
                            createdAt={formatDate(created_at)}
                            activityCategoryData={activityCategoryData}
                            registerEndDate={formatDate(register_end_date)}
                        />
                    )
                })}
                <div />
            </CardCarousell>
        </div>
    )
}

export default ActivitiesDetailModuleList
