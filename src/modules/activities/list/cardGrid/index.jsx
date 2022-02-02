/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */

import React from 'react'

import { formatDate } from '@utils'
import { ActivityCard } from '@components'

const ActivitiesModuleListCardGrid = ({
    activityData,
    activityCategoryData,
}) => {
    return (
        <div
            className='w-full grid gap-6'
            style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            }}
        >
            {activityData.map((item) => {
                const {
                    name,
                    role,
                    slug,
                    banner_url,
                    created_at,
                    category_id,
                    banner_file,
                    register_end_date,
                } = item

                return (
                    <ActivityCard
                        key={slug}
                        name={name}
                        slug={slug}
                        role={role.name}
                        categoryId={category_id}
                        banner={banner_file?.filename}
                        createdAt={formatDate(created_at)}
                        activityCategoryData={activityCategoryData}
                        registerEndDate={formatDate(register_end_date)}
                        fullWidth
                    />
                )
            })}
        </div>
    )
}

export default ActivitiesModuleListCardGrid
