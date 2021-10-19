import React, { useState } from 'react'

import { ComponentWrapper } from '@components'

import ActivitiesModuleList from './list'
import ActivitiesModuleHeader from './header'
import ActivitiesModuleSearch from './search'

const ActivitiesModule = ({ activityData, activityCategoryData }) => {
    const [currentActivityData, setCurrentActivityData] = useState([
        ...activityData,
    ])

    return (
        <div>
            <ActivitiesModuleHeader />
            <ComponentWrapper>
                <ActivitiesModuleSearch
                    activityCategoryData={activityCategoryData}
                    setCurrentActivityData={setCurrentActivityData}
                />
                <ActivitiesModuleList
                    activityData={currentActivityData}
                    activityCategoryData={activityCategoryData}
                />
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesModule
