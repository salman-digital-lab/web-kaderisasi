import React from 'react'
import ReactPaginate from 'react-paginate'

import { InfoIcon } from '@assets'
import { Button } from '@components'

import ActivitiesModuleListCardGrid from './cardGrid'

const ActivitiesModuleList = ({
    activityData,
    clearFilterHandler,
    currentActivityInfo,
    activityCategoryData,
}) => {
    return (
        <div className='my-8'>
            {activityData.length > 0 ? (
                <div>
                    <ActivitiesModuleListCardGrid
                        activityData={activityData}
                        activityCategoryData={activityCategoryData}
                    />
                    <ReactPaginate
                        pageRangeDisplayed={3}
                        pageCount={currentActivityInfo.lastPage}
                        nextClassName='font-bold text-bmka-accent-orange'
                        previousClassName='font-bold text-bmka-accent-orange'
                        pageLinkClassName='py-2 px-3 bg-bmka-primary-blue text-white rounded'
                        containerClassName='w-min p-4 flex gap-6 mt-10 mx-auto  rounded'
                    />
                </div>
            ) : (
                <div className='w-full py-28'>
                    <div className='w-full max-w-sm p-6 mx-auto flex flex-col gap-6 text-center bg-bmka-primary-blue rounded shadow-level-1'>
                        <InfoIcon className='w-12 mx-auto text-white' />
                        <p className='text-white'>
                            Tidak ada data yang ditemukan
                        </p>
                        <Button onClick={clearFilterHandler} variant='primary'>
                            Bersihkan filter
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ActivitiesModuleList
