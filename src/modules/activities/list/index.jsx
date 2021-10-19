/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */

import React from 'react'

import { InfoIcon } from '@assets'
import { formatDate } from '@utils'
import { ActivityCard } from '@components'

const ActivitiesModuleList = ({ activityData, activityCategoryData }) => {
    return (
        <div className='my-8'>
            {activityData.length > 0 ? (
                <div
                    className='w-full grid gap-4'
                    style={{
                        gridTemplateColumns:
                            'repeat(auto-fill, minmax(270px, 1fr))',
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
                                    registerEndDate={formatDate(
                                        register_end_date
                                    )}
                                />
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className='w-full py-28'>
                    <div className='w-full max-w-sm mx-auto text-center'>
                        <InfoIcon className='w-16 mx-auto' />
                        <h3 className='mt-4'>Tidak ada data yang ditemukan</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ActivitiesModuleList
