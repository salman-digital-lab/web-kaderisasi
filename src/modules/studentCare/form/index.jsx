/* eslint-disable no-shadow */

import React, { useState } from 'react'

import { Button, FormSelect } from '@components'

const StudentCareModuleForm = ({ name }) => {
    const [isActive, setIsActive] = useState(false)
    const [formData, setFormDate] = useState({
        problem_owner: '',
        problem_category: '',
        counselor_gender: '',
        problem_owner_name: '',
        technical_handling: '',
        problem_category_desk: '',
    })

    const formSubmitHandler = (e) => {
        e.preventDefault()
    }

    const formOnChangeHandler = (e) => {
        const { name, value } = e.target

        setFormDate({
            ...formData,
            [name]: value,
        })
    }

    return (
        <form onSubmit={formSubmitHandler} className='flex flex-col gap-10'>
            <div>
                <p className='font-bold text-center text-lg text-bmka-primary-blue'>
                    Hi, {name}
                </p>
            </div>
            <div>
                {isActive ? (
                    <div>
                        <div className='flex flex-col gap-6'>
                            <FormSelect
                                name='problem_owner'
                                label='Pemilik Masalah'
                                value={formData.problem_owner}
                                onChange={formOnChangeHandler}
                                placeholder='-- Pilih pemiliki masalah --'
                            >
                                <option value='Diri Sendiri'>
                                    Diri sendiri
                                </option>
                                <option value='Teman'>Teman</option>
                            </FormSelect>
                            <FormSelect
                                label='Kategori'
                                name='problem_category'
                                onChange={formOnChangeHandler}
                                value={formData.problem_category}
                                placeholder='-- Pilih Kategori --'
                            >
                                <option value='Akademik'>Akademik</option>
                                <option value='Kesehatan'>Kesehatan</option>
                                <option value='Keuangan'>Keuangan</option>
                                <option value='Keluarga'>Keluarga</option>
                                <option value='Lainnya'>Lainnya</option>
                            </FormSelect>
                        </div>
                        <div className='text-center mt-10'>
                            <Button variant='secondary'>Submit</Button>
                        </div>
                    </div>
                ) : (
                    <div className='text-center'>
                        <p className='mb-6'>
                            Dengan menekan tombol dibawah ini anda setuju bahwa
                            data diri anda sudah benar.
                        </p>
                        <Button
                            variant='secondary'
                            onClick={() => setIsActive(true)}
                        >
                            Saya setuju
                        </Button>
                    </div>
                )}
            </div>
        </form>
    )
}

export default StudentCareModuleForm
