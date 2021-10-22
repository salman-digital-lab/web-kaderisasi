import React from 'react'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataDomisili = () => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormSelect value='' label='Provinsi' placeholder='Pilih provinsi'>
                <option value='jawaBarat'>Jawa Barat</option>
                <option value='jawaTengah'>Jawa Tengah</option>
            </FormSelect>
            <FormSelect value='' label='Kota' placeholder='Pilih Kota'>
                <option value='bandung'>Bandung</option>
                <option value='jakarta'>Jakarta</option>
            </FormSelect>
            <FormSelect
                value=''
                label='Kecamatan'
                placeholder='Pilih Kecamatan'
            >
                <option value='bandung'>Bandung</option>
                <option value='jakarta'>Jakarta</option>
            </FormSelect>
            <FormSelect
                value=''
                label='Kelurahan'
                placeholder='Pilih Kelurahan'
            >
                <option value='bandung'>Bandung</option>
                <option value='jakarta'>Jakarta</option>
            </FormSelect>
            <FormInput type='text' label='Alamat' />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataDomisili
