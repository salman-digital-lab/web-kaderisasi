/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataPersonal = () => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormSelect
                value=''
                label='Jenis Kelamin'
                placeholder='Pilih Jenis Kelamin'
            >
                <option value='pria'>Pria</option>
                <option value='wanita'>Wanita</option>
            </FormSelect>
            <FormInput type='date' label='Tanggal Lahir' />
            <FormInput type='text' label='Tempat Lahir' />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataPersonal
