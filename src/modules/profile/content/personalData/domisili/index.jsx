import React from 'react'

import { FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'
import FormDropdown from '../../../../../components/form/dropdown'

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
            <FormDropdown
                label='Provinsi'
                name='province_id'
                defaultValue={formData.province_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih provinsi --'
                defaultName={provinceName?.name}
                options={provincesList}
                required
            />
            <FormDropdown
                label='Kota'
                name='regency_id'
                defaultValue={formData.regency_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih kota --'
                defaultName={regencyName?.name}
                options={regency}
                required
            />
            <FormDropdown
                label='Kecamatan'
                name='district_id'
                defaultValue={formData.district_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih kecamatan --'
                defaultName={districtName?.name}
                options={district}
                required
            />
            <FormDropdown
                label='Desa'
                name='village_id'
                defaultValue={formData.village_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih kecamatan --'
                defaultName={villageName?.name}
                options={village}
                required
            />
            {/* <FormSelect
                label='Provinsi'
                name='province_id'
                value={formData.province_id ?? ''}
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
            </FormSelect> */}
            {/* <FormSelect
                label='Kota'
                name='regency_id'
                value={formData.regency_id ?? ''}
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
            </FormSelect> */}
            {/* <FormSelect
                label='Kecamatan'
                name='district_id'
                value={formData.district_id ?? ''}
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
            </FormSelect> */}
            {/* <FormSelect
                name='village_id'
                label='Kelurahan'
                value={formData.village_id ?? ''}
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
            </FormSelect> */}
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataDomisili
