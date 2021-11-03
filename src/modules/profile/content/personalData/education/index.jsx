import React from 'react'

import { FormInput, FormSelect } from '@components'

import ProfileModuleContentPersonalDataCard from '../card'

const ProfileModuleContentPersonalDataEducation = ({
    formData,
    formOnChangeHandler,
}) => {
    return (
        <ProfileModuleContentPersonalDataCard>
            <FormInput
                type='text'
                name='student_id'
                value={formData.student_id}
                label='Nomor Induk Mahasiswa'
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan nomor induk mahasiswa --'
                required
            />
            <FormSelect
                label='Kampus'
                value={formData.university_id}
                onChange={formOnChangeHandler}
                placeholder='-- Pilih kampus anda --'
                required
            >
                <option value='UNIKOM'>UNIKOM</option>
                <option value='UNIKOM'>ITB</option>
                <option value='UNIKOM'>UNPAD</option>
            </FormSelect>
            <FormInput
                type='text'
                name='faculty'
                label='Fakultas'
                value={formData.faculty}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan fakultas anda --'
                required
            />
            <FormInput
                type='text'
                name='major'
                label='Program Studi'
                value={formData.major}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan program studi anda --'
                required
            />
            <FormInput
                type='number'
                name='intake_year'
                label='Tahun Masuk'
                value={formData.intake_year}
                onChange={formOnChangeHandler}
                placeholder='-- Ketikkan tahun masuk anda --'
                required
            />
        </ProfileModuleContentPersonalDataCard>
    )
}

export default ProfileModuleContentPersonalDataEducation
