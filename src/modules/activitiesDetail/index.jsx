import React from 'react'
import { useRouter } from 'next/router'

import { Fallback, Jumbotron, ComponentWrapper } from '@components'

import ActivitiesDetailModuleList from './list'
import ActivitiesDetailModuleBanner from './banner'
import ActivitiesDetailModuleContent from './content'

const ActivitiesDetailModule = ({
    activityList,
    activityCategory,
    activityDetailData,
}) => {
    const router = useRouter()

    return (
        <div>
            {router.isFallback ? (
                <Fallback />
            ) : (
                <div>
                    <Jumbotron>
                        <h1 className='mb-16 w-5/6 mx-auto md:w-full text-center text-white px-1 md:px-5 text-3xl md:text-6xl'>
                            {activityDetailData.name}
                        </h1>
                    </Jumbotron>
                    <ComponentWrapper>
                        <div>
                            <div className='w-full mx-auto px-0'>
                                <ActivitiesDetailModuleBanner
                                    status={activityDetailData.status}
                                    images={activityDetailData.images}
                                    activityCategory={activityCategory}
                                    categoryID={activityDetailData.category_id}
                                    closeDate={
                                        activityDetailData.register_end_date
                                    }
                                />
                            </div>
                            <div>
                                <ActivitiesDetailModuleContent
                                    description={activityDetailData.description}
                                />
                            </div>
                        </div>
                    </ComponentWrapper>
                    <div className='py-20'>
                        <ActivitiesDetailModuleList
                            activityData={activityList}
                            activityCategoryData={activityCategory}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ActivitiesDetailModule
