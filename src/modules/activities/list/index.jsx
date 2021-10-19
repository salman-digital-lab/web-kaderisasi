import React from 'react'

import { InfoIcon } from '@assets'

import ActivitiesModuleListCardGrid from './cardGrid'

const ActivitiesModuleList = ({ activityData, activityCategoryData }) => {
    return (
        <div className='my-8'>
            {activityData.length > 0 ? (
                <ActivitiesModuleListCardGrid
                    activityData={activityData}
                    activityCategoryData={activityCategoryData}
                />
            ) : (
                <div className='w-full py-28'>
                    <div className='w-full max-w-sm mx-auto text-center'>
                        <InfoIcon className='w-16 mx-auto text-bmka-accent-orange' />
                        <h3 className='mt-4'>Tidak ada data yang ditemukan</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ActivitiesModuleList
