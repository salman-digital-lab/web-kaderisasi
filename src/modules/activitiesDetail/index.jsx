import React from 'react'

import { Jumbotron, ComponentWrapper } from '@components'

import ActivitiesDetailModuleBanner from './banner'
import ActivitiesDetailModuleContent from './content'

const ActivitiesDetailModule = ({ activityCategory, activityDetailData }) => {
    return (
        <div>
            <Jumbotron>
                <h1 className='text-center text-white'>
                    {activityDetailData.name}
                </h1>
            </Jumbotron>
            <ComponentWrapper>
                <div className='pb-16'>
                    <div>
                        <ActivitiesDetailModuleBanner
                            status={activityDetailData.status}
                            images={activityDetailData.images}
                            activityCategory={activityCategory}
                            categoryID={activityDetailData.category_id}
                            closeDate={activityDetailData.register_end_date}
                        />
                    </div>
                    <div>
                        <ActivitiesDetailModuleContent
                            description={activityDetailData.description}
                        />
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesDetailModule
