import axios from 'axios'
import { useSnackbar } from 'notistack'
import ReactPaginate from 'react-paginate'
import React, { useState } from 'react'

import { InfoIcon } from '@assets'
import { Button } from '@components'

import ActivitiesModuleListCardGrid from './cardGrid'

const ActivitiesModuleList = ({
    activityData,
    clearFilterHandler,
    currentActivityInfo,
    activityCategoryData,
    setCurrentActivityData,
    activitiesModuleSearchRef,
    currentCategory,
    searchKeyword,
    setCurrentPage,
    currentPage,
}) => {
    const { enqueueSnackbar } = useSnackbar()

    const [isLoading, setIsLoading] = useState(false)

    const pageChangeHandler = async (e) => {
        setIsLoading(true)

        const { selected } = e
        setCurrentPage(selected + 1)

        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        try {
            const response = await axios.get(
                `${baseURL}/${baseURLVersion}/activity?category=${currentCategory}&keyword=${searchKeyword}&page=${
                    selected + 1
                }`
            )

            setCurrentActivityData(response.data.data.data)
            activitiesModuleSearchRef.current.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        } catch {
            enqueueSnackbar('Failed fetch activity data', { variant: 'error' })
        }

        setIsLoading(false)
    }

    return (
        <div className='my-8'>
            {activityData.length > 0 ? (
                <div>
                    <ActivitiesModuleListCardGrid
                        isLoading={isLoading}
                        activityData={activityData}
                        activityCategoryData={activityCategoryData}
                    />
                    <div className='w-full flex justify-center'>
                        <ReactPaginate
                            breakLabel='...'
                            pageRangeDisplayed={1}
                            marginPagesDisplayed={1}
                            onPageChange={pageChangeHandler}
                            pageCount={currentActivityInfo.lastPage}
                            pageLinkClassName='py-2 px-3 rounded'
                            nextClassName='font-bold text-bmka-accent-orange'
                            previousClassName='font-bold text-bmka-accent-orange'
                            activeLinkClassName='bg-bmka-primary-blue text-white rounded'
                            containerClassName='p-4 flex gap-6 mt-10 mx-auto rounded'
                            forcePage={currentPage - 1}
                        />
                    </div>
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
