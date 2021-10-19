import React from 'react'

import { InfoIcon } from '@assets'
import { Button } from '@components'

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
                    <div className='w-full max-w-sm p-6 mx-auto flex flex-col gap-6 text-center bg-bmka-primary-blue rounded shadow-level-1'>
                        <InfoIcon className='w-12 mx-auto text-white' />
                        <p className='text-white'>
                            Tidak ada data yang ditemukan
                        </p>
                        <Button variant='primary'>Bersihkan filter</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ActivitiesModuleList
