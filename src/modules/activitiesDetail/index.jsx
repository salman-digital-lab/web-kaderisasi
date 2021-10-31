import React from 'react'

import { Jumbotron, ComponentWrapper } from '@components'

import ActivitiesDetailModuleBanner from './banner'

const ActivitiesDetailModule = ({ activityCategory, activityDetailData }) => {
    return (
        <div>
            <Jumbotron>
                <h1 className='text-center text-white'>
                    {activityDetailData.name}
                </h1>
            </Jumbotron>
            <ComponentWrapper>
                <div>
                    <ActivitiesDetailModuleBanner
                        status={activityDetailData.status}
                        images={activityDetailData.images}
                        activityCategory={activityCategory}
                        categoryID={activityDetailData.category_id}
                        closeDate={activityDetailData.register_end_date}
                    />
                </div>
                <div className='py-16'>
                    <div>
                        <p>test</p>
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesDetailModule
