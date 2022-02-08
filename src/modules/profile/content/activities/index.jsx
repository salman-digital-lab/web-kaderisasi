import React from 'react'

import { formatDate } from '@utils'
import { ActivityCard, Button, FormInput, FormSelect } from '@components'
import ReactPaginate from 'react-paginate'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

const ProfileModuleContentActivities = ({
    userActivitiesData,
    activityCategoryData,
    userActivitiesInfo,
}) => {
    const { enqueueSnackbar } = useSnackbar()
    const [isLoading, setIsLoading] = useState(false)
    const [currentActivityInfo, setCurrentActivityInfo] =
        useState(userActivitiesInfo)
    const [currentActivityData, setCurrentActivityData] =
        useState(userActivitiesData)
    const pageChangeHandler = async (e) => {
        setIsLoading(true)

        const { selected } = e

        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        try {
            const response = await axios.get(
                `${baseURL}/${baseURLVersion}/account/user/activities?page=${
                    selected + 1
                }`
            )

            setCurrentActivityData(response.data.data.data)
            setCurrentActivityInfo(response.data.data.meta)
            activitiesModuleSearchRef.current.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        } catch {
            enqueueSnackbar('Failed fetch activity data', {
                variant: 'error',
            })
        }

        setIsLoading(false)
    }

    return (
        <>
            <div>
                {currentActivityData?.length > 0 ? (
                    <div
                        className='w-full grid gap-6 pt-6'
                        style={{
                            gridTemplateColumns:
                                'repeat(auto-fill, minmax(270px, 1fr))',
                        }}
                    >
                        {currentActivityData?.map((item) => {
                            const {
                                name,
                                minimum_role,
                                slug,
                                created_at,
                                category_id,
                                banner_image,
                                register_end_date,
                                activity_registration,
                            } = item

                            return (
                                <ActivityCard
                                    key={slug}
                                    name={name}
                                    slug={slug}
                                    role={minimum_role?.name}
                                    categoryId={category_id}
                                    banner={banner_image?.file}
                                    createdAt={formatDate(created_at)}
                                    activityCategoryData={activityCategoryData}
                                    registerEndDate={formatDate(
                                        register_end_date
                                    )}
                                    fullWidth
                                    status={activity_registration?.status}
                                    edit={true}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <div className='w-full py-20 text-center'>
                        <p>Tidak ada kegiatan</p>
                    </div>
                )}
            </div>
            <ReactPaginate
                breakLabel='...'
                pageRangeDisplayed={3}
                onPageChange={pageChangeHandler}
                pageCount={parseInt(currentActivityInfo.lastPage)}
                pageLinkClassName='py-2 px-3 rounded'
                nextClassName='font-bold text-bmka-accent-orange'
                previousClassName='font-bold text-bmka-accent-orange'
                activeLinkClassName='bg-bmka-primary-blue text-white rounded'
                containerClassName='w-min p-4 flex gap-6 mt-10 mx-auto  rounded'
            />
        </>
    )
}

export default ProfileModuleContentActivities
