import React from 'react'

import { FormInput } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataDomisili = () => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormInput type='text' label='Provinsi' />
            <FormInput type='text' label='Kota' />
            <FormInput type='text' label='Kecamatan' />
            <FormInput type='text' label='Kelurahan' />
            <FormInput type='text' label='Kelurahan/Desa' />
            <FormInput type='text' label='Alamat' />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataDomisili
