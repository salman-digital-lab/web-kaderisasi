import React from 'react'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataEducation = () => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormSelect value='' label='Kampus' placeholder='Pilih Kampus'>
                <option value='UNIKOM'>UNIKOM</option>
                <option value='UNIKOM'>ITB</option>
                <option value='UNIKOM'>UNPAD</option>
            </FormSelect>
            <FormInput type='text' label='Fakultas' />
            <FormInput type='text' label='Program Studi' />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataEducation
