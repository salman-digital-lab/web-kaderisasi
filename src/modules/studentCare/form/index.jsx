/* eslint-disable no-shadow */

import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

import { Button, FormInput, FormSelect, FormTextArea } from '@components'

const StudentCareModuleForm = ({ name, token }) => {
    const { enqueueSnackbar } = useSnackbar()

    const formDataTemplate = {
        problem_owner: '',
        problem_category: '',
        counselor_gender: '',
        problem_owner_name: '',
        technical_handling: '',
        problem_category_desk: '',
    }

    const [isActive, setIsActive] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [formData, setFormData] = useState({ ...formDataTemplate })

    const formSubmitHandler = async (e) => {
        e.preventDefault()

        setIsSending(true)
        enqueueSnackbar('Mengirim curhatanmu... Tunggu sebentar ya.', {
            variant: 'info',
        })

        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        const formDataTemp = {
            ...formData,
            problem_owner_name:
                formData.problem_owner === 'Diri Sendiri'
                    ? name
                    : formData.problem_owner_name,
        }

        try {
            const response = await axios.post(
                `${baseURL}/${baseURLVersion}/member/studentCare`,
                formDataTemp,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            )

            enqueueSnackbar(response.data.message, { variant: 'success' })

            setIsSending(false)

            setFormData({ ...formDataTemplate })
        } catch (error) {
            enqueueSnackbar(
                'Oops! Ada kesalahan terjadi, coba lagi nanti atau tunggu beberapa saat.',
                { variant: 'error' }
            )

            setIsSending(false)
        }
    }

    const formOnChangeHandler = (e) => {
        const { name, value } = e.target

        setFormData({
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
                        {/**
                         * show if sending
                         */}
                        {isSending ? (
                            <div className='flex flex-col items-center justify-center animate-bounce'>
                                <p className='text-center text-lg font font-semibold'>
                                    Mengirim curhatanmu... Tunggu sebentar ya.
                                    Jangan tutup halaman ini.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className='flex flex-col gap-6'>
                                    <FormSelect
                                        name='problem_owner'
                                        label='Pemilik Masalah'
                                        value={formData.problem_owner}
                                        onChange={formOnChangeHandler}
                                        placeholder='-- Pilih pemiliki masalah --'
                                        disabled={isSending}
                                        required
                                    >
                                        <option value='Diri Sendiri'>
                                            Diri sendiri
                                        </option>
                                        <option value='Teman'>Teman</option>
                                    </FormSelect>
                                    {formData.problem_owner === 'Teman' && (
                                        <FormInput
                                            label='Nama Teman'
                                            name='problem_owner_name'
                                            onChange={formOnChangeHandler}
                                            value={formData.problem_owner_name}
                                            placeholder='-- Ketikkan nama temanmu disini --'
                                            disabled={isSending}
                                            required
                                        />
                                    )}
                                    <FormSelect
                                        label='Kategori'
                                        name='problem_category'
                                        onChange={formOnChangeHandler}
                                        value={formData.problem_category}
                                        placeholder='-- Pilih Kategori --'
                                        disabled={isSending}
                                        required
                                    >
                                        <option value='Akademik'>
                                            Akademik
                                        </option>
                                        <option value='Kesehatan'>
                                            Kesehatan
                                        </option>
                                        <option value='Keuangan'>
                                            Keuangan
                                        </option>
                                        <option value='Keluarga'>
                                            Keluarga
                                        </option>
                                        <option value='Lainnya'>Lainnya</option>
                                    </FormSelect>
                                    <FormTextArea
                                        spellCheck='false'
                                        name='problem_category_desk'
                                        onChange={formOnChangeHandler}
                                        value={formData.problem_category_desk}
                                        label='Deskripsi masalah yang akan didiskusikan'
                                        placeholder='-- Ketikkan deskripsi masalahmu disini --'
                                        disabled={isSending}
                                        required
                                    />
                                    <FormSelect
                                        label='Teknis Penanganan'
                                        name='technical_handling'
                                        onChange={formOnChangeHandler}
                                        value={formData.technical_handling}
                                        placeholder='-- Pilih Teknis Penanganan --'
                                        disabled={isSending}
                                        required
                                    >
                                        <option value='Online'>Online</option>
                                        <option value='Bertemu langsung'>
                                            Langsung Bertemu
                                        </option>
                                    </FormSelect>
                                    <FormSelect
                                        label='Prefer dengan konselor'
                                        name='counselor_gender'
                                        onChange={formOnChangeHandler}
                                        value={formData.counselor_gender}
                                        placeholder='-- Pilih Prefer Konselor --'
                                        disabled={isSending}
                                        required
                                    >
                                        <option value='Laki-laki'>
                                            Laki - laki
                                        </option>
                                        <option value='Perempuan'>
                                            Perempuan
                                        </option>
                                        <option value='Keduanya'>
                                            Keduanya
                                        </option>
                                    </FormSelect>
                                </div>
                                <div className='text-center mt-10'>
                                    <Button variant='secondary'>Submit</Button>
                                </div>
                            </>
                        )}
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
