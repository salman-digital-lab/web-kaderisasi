import React from 'react'

import { FormInput } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataEducation = () => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormInput type='text' label='Kampus' />
            <FormInput type='text' label='Fakultas' />
            <FormInput type='text' label='Program Studi' />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataEducation
