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

const HomeModuleActivity = ({ activityData, activityCategoryData }) => {
    return (
        <div>
            <CardCarousell title='Kegiatan Terkini'>
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

export default HomeModuleActivity
