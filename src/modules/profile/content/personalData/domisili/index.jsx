import React from 'react'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataDomisili = ({
    formData,
    regionData,
    provincesList,
    formOnChangeHandler,
}) => {
    const { regency, district, village } = regionData

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
            <FormSelect
                label='Kota'
                name='regency_id'
                value={formData.regency_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih Kota --'
            >
                {regency.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
            </FormSelect>
            <FormSelect
                label='Kecamatan'
                name='district_id'
                value={formData.district_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih Kecamatan --'
            >
                {district.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
            </FormSelect>
            <FormSelect
                name='village_id'
                label='Kelurahan'
                value={formData.village_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih Kelurahan --'
            >
                {village.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
            </FormSelect>
            <FormInput
                type='text'
                label='Alamat'
                name='current_address'
                onChange={formOnChangeHandler}
                value={formData.current_address}
                placeholder='-- Ketikkan alamat anda --'
            />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataDomisili
