import React from 'react'

import { FormInput } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataPersonal = () => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormInput type='date' label='Tanggal Lahir' />
            <FormInput type='text' label='Tempat Lahir' />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataPersonal
