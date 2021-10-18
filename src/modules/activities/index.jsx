import React from 'react'

import { ComponentWrapper } from '@components'

import ActivitiesModuleList from './list'
import ActivitiesModuleHeader from './header'
import ActivitiesModuleSearch from './search'

const ActivitiesModule = ({ activityData }) => {
    return (
        <div>
            <ActivitiesModuleHeader />
            <ComponentWrapper>
                <ActivitiesModuleSearch />
                <ActivitiesModuleList activityData={activityData} />
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesModule
