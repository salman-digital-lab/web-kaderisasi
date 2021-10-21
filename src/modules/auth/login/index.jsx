import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

import { Link, Button, AuthTemplate } from '@components'

import LoginModuleForm from './form'

const LoginModule = () => {
    const { enqueueSnackbar } = useSnackbar()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const inputFormHandler = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault()

        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        const { email, password } = formData

        try {
            const response = await axios.post(
                `${baseURL}/${baseURLVersion}/auth`,
                { email, password }
            )

            enqueueSnackbar(response.data.message, { variant: 'success' })
        } catch {
            enqueueSnackbar('Oops! Something wrong.', { variant: 'error' })
        }
    }

    return (
        <AuthTemplate>
            <div className='w-full h-full grid place-items-center'>
                <form
                    onSubmit={formSubmitHandler}
                    className='flex flex-col gap-6'
                >
                    <div className='text-center'>
                        <h2 className='font-bold'>Masuk Akun</h2>
                        <p className='text-gray-600'>
                            Silakan isi form dibawah ini dengan benar
                        </p>
                    </div>
                    <div>
                        <LoginModuleForm
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
                            Masuk
                        </Button>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-600'>
                            Belum punya akun ?{' '}
                            <span className='text-bmka-primary-blue'>
                                <Link href='/register'>Daftar</Link>
                            </span>
                        </p>
                        <p className='text-gray-600'>
                            Lupa password ?{' '}
                            <span className='text-bmka-primary-blue'>
                                <Link href='/forget-password'>
                                    Ganti disini
                                </Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </AuthTemplate>
    )
}

export default LoginModule
