import React from 'react'

import { FormSearchableDropdown } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataDomisili = ({
    formData,
    regionData,
    provincesList,
    formOnChangeHandler,
}) => {
    const { regency, district, village } = regionData

    let provinceName = provincesList.find(
        (province) => province.id == formData.province_id
    )
    let regencyName = regency.find(
        (regency) => regency.id == formData.regency_id
    )
    let districtName = district.find(
        (district) => district.id == formData.district_id
    )
    let villageName = village.find(
        (village) => village.id == formData.village_id
    )

    return (
        <ProfileModuleContentPersonalDataCard>
            <FormSearchableDropdown
                label='Provinsi'
                name='province_id'
                defaultValue={formData.province_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih provinsi --'
                defaultName={provinceName?.name}
                options={provincesList}
                required
            />
            <FormSearchableDropdown
                label='Kota'
                name='regency_id'
                defaultValue={formData.regency_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih kota --'
                defaultName={regencyName?.name}
                options={regency}
                required
            />
            <FormSearchableDropdown
                label='Kecamatan'
                name='district_id'
                defaultValue={formData.district_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih kecamatan --'
                defaultName={districtName?.name}
                options={district}
                required
            />
            <FormSearchableDropdown
                label='Desa'
                name='village_id'
                defaultValue={formData.village_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih kecamatan --'
                defaultName={villageName?.name}
                options={village}
                required
            />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataDomisili
