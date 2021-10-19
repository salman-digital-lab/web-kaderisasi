import React from 'react'

import { ComponentWrapper } from '@components'

import ActivitiesModuleList from './list'
import ActivitiesModuleHeader from './header'
import ActivitiesModuleSearch from './search'

const ActivitiesModule = ({ activityData, activityCategoryData }) => {
    return (
        <div>
            <ActivitiesModuleHeader />
            <ComponentWrapper>
                <ActivitiesModuleSearch
                    activityCategoryData={activityCategoryData}
                />
                <ActivitiesModuleList
                    activityData={activityData}
                    activityCategoryData={activityCategoryData}
                />
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesModule
