import React from 'react'

import { ComponentWrapper } from '@components'
import { withUserAuthenticationHOC } from '@hoc'

import ProfileModuleContent from './content'
import ProfileModuleUserInfo from './userInfo'

const ProfileModule = ({
    educationList,
    provincesList,
    activityCategoryData,
}) => {
    return (
        <div>
            <ProfileModuleUserInfo />
            <ComponentWrapper>
                <div className='w-full max-w-3xl mx-auto py-10'>
                    <ProfileModuleContent
                        educationList={educationList}
                        provincesList={provincesList}
                        activityCategoryData={activityCategoryData}
                    />
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default withUserAuthenticationHOC(ProfileModule)
