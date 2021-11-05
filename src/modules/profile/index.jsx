import React from 'react'

import { ComponentWrapper } from '@components'
import { withUserAuthenticationHOC } from '@hoc'

import ProfileModuleContent from './content'
import ProfileModuleUserInfo from './userInfo'

const ProfileModule = ({ educationList, activityCategoryData }) => {
    return (
        <ComponentWrapper>
            <div className='flex gap-6 pt-36 pb-12'>
                <ProfileModuleUserInfo />
                <ProfileModuleContent
                    educationList={educationList}
                    activityCategoryData={activityCategoryData}
                />
            </div>
        </ComponentWrapper>
    )
}

export default withUserAuthenticationHOC(ProfileModule)
