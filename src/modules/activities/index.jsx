import React from 'react'

import { ComponentWrapper } from '@components'

import ActivitiesModuleList from './list'
import ActivitiesModuleHeader from './header'

const ActivitiesModule = ({ activityData }) => {
    return (
        <div>
            <ActivitiesModuleHeader />
            <ComponentWrapper>
                <ActivitiesModuleList activityData={activityData} />
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesModule
