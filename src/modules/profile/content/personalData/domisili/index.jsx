import React from 'react'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataDomisili = ({
    formData,
    provincesList,
    formOnChangeHandler,
}) => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormSelect
                label='Provinsi'
                name='province_id'
                value={formData.province_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih provinsi --'
            >
                {provincesList.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
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
