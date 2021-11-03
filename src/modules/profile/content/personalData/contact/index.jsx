import React from 'react'

import { FormInput } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataContact = ({
    formData,
    formOnChangeHandler,
}) => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormInput
                type='text'
                name='email'
                label='E-mail'
                value={formData.email}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan email anda --'
                disabled
            />
            <FormInput
                type='number'
                name='phone'
                label='Whatsapp'
                value={formData.phone}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan nomor telepon anda --'
            />
            <FormInput
                type='text'
                name='line_id'
                label='ID Line'
                value={formData.line_id}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan LINE ID anda --'
            />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataContact
