import React from 'react'

import { FormSelect } from '@components'

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
                required
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
                required
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
                required
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
                required
            >
                {village.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
            </FormSelect>
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataDomisili
