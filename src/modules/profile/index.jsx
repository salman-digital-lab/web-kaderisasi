import React from 'react'

import { ComponentWrapper } from '@components'

import ProfileModuleUserInfo from './userInfo'
import ProfileModuleContent from './content'

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
