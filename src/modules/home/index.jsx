import React from 'react'

import { ComponentWrapper } from '@components'

import Header from './header'
import Activity from './activity'
import Statistics from './statistics'
import StudentCare from './studentCare'

const HomeModule = ({ activityData, activityCategoryData }) => {
    return (
        <div>
            <Header />
            <ComponentWrapper>
                <Statistics />
            </ComponentWrapper>
            <div className='mt-14'>
                <Activity
                    activityData={activityData}
                    activityCategoryData={activityCategoryData}
                />
            </div>
            <div className='my-28'>
                <ComponentWrapper>
                    <StudentCare />
                </ComponentWrapper>
            </div>
        </div>
    )
}

export default HomeModule
