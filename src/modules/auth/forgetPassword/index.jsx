import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { withoutUserAuthentication } from '@hoc'
import { Link, Button, AuthTemplate } from '@components'

import { ArrowLeftIcon } from '@assets'
import ForgetPasswordModuleForm from './form'

const ForgetPasswordModule = () => {
    const router = useRouter()

    const formDataDefault = { email: '' }

    const { enqueueSnackbar } = useSnackbar()

    const [formData, setFormData] = useState({ ...formDataDefault })

    const formSubmitHandler = async (e) => {
        e.preventDefault()

        enqueueSnackbar('Sending verification email...', { variant: 'info' })

        const { email } = formData
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        await axios
            .post(`${baseURL}/${baseURLVersion}/account/forgot_password`, {
                email,
            })
            .then((res) => {
                enqueueSnackbar(res.data.message, { variant: 'success' })

                setFormData({ ...formDataDefault })
            })
            .catch((err) => {
                enqueueSnackbar(err.response.data.message, { variant: 'error' })
            })
    }

    const inputFormHandler = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const backButtonHandler = () => {
        router.push('/')
    }

    return (
        <AuthTemplate>
            <Button
                className='md:hidden'
                onClick={backButtonHandler}
                textClassName='font-bold text-bmka-primary-blue'
            >
                <div className='flex gap-1 items-center'>
                    <div className='w-4'>
                        <ArrowLeftIcon />
                    </div>
                    Kembali ke portal utama
                </div>
            </Button>
            <div className='w-full h-full grid place-items-center'>
                <form
                    onSubmit={formSubmitHandler}
                    className='max-w-xs flex flex-col gap-6'
                >
                    <div className='text-center'>
                        <h2 className='font-bold'>Lupa Password</h2>
                        <p className='text-gray-600'>
                            Silakan isi form dibawah ini dengan email akun anda.
                        </p>
                    </div>
                    <div>
                        <ForgetPasswordModuleForm
                            formData={formData}
                            inputFormHandler={inputFormHandler}
                        />
                    </div>
                    <div>
                        <Button
                            type='submit'
                            variant='primary'
                            className='w-full'
                        >
                            Kirim Link
                        </Button>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-600'>
                            Sudah ingat passwordnya ?{' '}
                            <span className='text-bmka-primary-blue'>
                                <Link href='/login'>Masuk</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </AuthTemplate>
    )
}

export default withoutUserAuthentication(ForgetPasswordModule)
