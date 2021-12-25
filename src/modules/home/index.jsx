import React from 'react'

import { ComponentWrapper } from '@components'

import HomeModuleHeader from './header'
import HomeModuleActivity from './activity'
import HomeModuleStatistics from './statistics'
import HomeModuleStudentCare from './studentCare'

const HomeModule = ({ activityData, activityCategoryData }) => {
    return (
        <div>
            <HomeModuleHeader />
            <ComponentWrapper>
                <HomeModuleStatistics />
            </ComponentWrapper>
            <HomeModuleActivity
                activityData={activityData}
                activityCategoryData={activityCategoryData}
            />
            <div className='my-28'>
                <ComponentWrapper>
                    <HomeModuleStudentCare />
                </ComponentWrapper>
            </div>
        </div>
    )
}

export default HomeModule
