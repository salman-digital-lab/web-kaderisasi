import React from 'react'

import { FormInput } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataContact = () => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormInput type='text' label='Whatsapp' />
            <FormInput type='text' label='ID Line' />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataContact
