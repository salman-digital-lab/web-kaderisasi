import React from 'react'

import { ComponentWrapper } from '@components'

import ProfileModuleContent from './content'
import ProfileModuleUserInfo from './userInfo'

const ProfileModule = ({ activityCategoryData }) => {
    return (
        <ComponentWrapper>
            <div className='py-36 grid grid-cols-profile gap-8'>
                <ProfileModuleUserInfo />
                <ProfileModuleContent
                    activityCategoryData={activityCategoryData}
                />
            </div>
        </ComponentWrapper>
    )
}

export default ProfileModule
