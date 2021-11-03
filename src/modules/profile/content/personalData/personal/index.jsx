/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataPersonal = ({
    formData,
    formOnChangeHandler,
}) => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormSelect
                name='gender'
                label='Jenis Kelamin'
                value={formData.gender}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih Jenis Kelamin --'
                required
            >
                <option value='M'>Pria</option>
                <option value='F'>Wanita</option>
            </FormSelect>
            <FormInput
                type='date'
                label='Tanggal Lahir'
                name='date_of_birthday'
                onChange={formOnChangeHandler}
                value={formData.date_of_birthday}
                required
            />
            <FormInput
                type='text'
                name='city_of_birth'
                label='Tempat Lahir'
                value={formData.city_of_birth}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan tempat lahir anda --'
                required
            />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataPersonal
