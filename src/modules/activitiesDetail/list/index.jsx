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
                        banner_url,
                        created_at,
                        category_id,
                        register_end_date,
                        banner_file,
                    } = item

                    return (
                        <div key={index} className='flex justify-center'>
                            <ActivityCard
                                name={name}
                                role={role.name}
                                slug={slug}
                                banner={banner_file?.filename}
                                categoryId={category_id}
                                createdAt={formatDate(created_at)}
                                activityCategoryData={activityCategoryData}
                                registerEndDate={formatDate(register_end_date)}
                            />
                        </div>
                    )
                })}
                <div />
            </CardCarousell>
        </div>
    )
}

export default ActivitiesDetailModuleList
