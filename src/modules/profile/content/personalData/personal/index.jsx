/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'
import moment from 'moment'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataPersonal = ({
    formData,
    formOnChangeHandler,
}) => {
    const formattedDate = (date) => {
        if (!date) {
            return ''
        }

        return moment(date).format('YYYY-MM-DD')
    }

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
                value={formattedDate(formData.date_of_birthday)}
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
            <FormInput
                type='text'
                label='Alamat Asal'
                name='from_address'
                value={formData.from_address}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan alamat asal anda --'
            />
            <FormInput
                type='text'
                label='Alamat Saat Ini'
                name='current_address'
                onChange={formOnChangeHandler}
                value={formData.current_address}
                placeholder='-- Ketikkan anda alamat saat ini --'
            />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataPersonal
