import React from 'react'

import { ComponentWrapper } from '@components'

import ProfileModuleContent from './content'
import ProfileModuleUserInfo from './userInfo'

const ProfileModule = () => {
    return (
        <ComponentWrapper>
            <div className='py-36 grid grid-cols-profile gap-8'>
                <ProfileModuleUserInfo />
                <ProfileModuleContent />
            </div>
        </ComponentWrapper>
    )
}

export default ProfileModule
