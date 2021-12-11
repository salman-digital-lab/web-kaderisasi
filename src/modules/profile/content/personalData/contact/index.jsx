import React from 'react'

import { FormInput, FormSelect } from '@components'

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
                required
            />
            <FormInput
                type='number'
                name='phone'
                label='Whatsapp'
                value={formData.phone}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan nomor telepon anda --'
                required
            />
            <FormInput
                type='text'
                name='line_id'
                label='ID Line'
                value={formData.line_id}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan LINE ID anda --'
                required
            />
            <FormSelect
                label='Newsletter'
                name='is_subscribing'
                onChange={formOnChangeHandler}
                value={formData.is_subscribing}
            >
                <option value='0'>Subscribe</option>
                <option value='1'>Unsubscribe</option>
            </FormSelect>
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataContact
