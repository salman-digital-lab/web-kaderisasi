import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

import { withoutUserAuthentication } from '@hoc'
import { Link, Button, AuthTemplate } from '@components'

import ForgetPasswordModuleForm from './form'

const ForgetPasswordModule = () => {
    const formDataDefault = { email: '' }

    const { enqueueSnackbar } = useSnackbar()

    const [formData, setFormData] = useState({ ...formDataDefault })

    const formSubmitHandler = async (e) => {
        e.preventDefault()

        enqueueSnackbar('Sending verification email...', { variant: 'info' })

        const { email } = formData
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        try {
            const data = await axios.post(
                `${baseURL}/${baseURLVersion}/account/forgot_password`,
                {
                    email,
                }
            )

            const { message } = await data.data

            enqueueSnackbar(message, { variant: 'success' })

            setFormData({ ...formDataDefault })
        } catch {
            enqueueSnackbar('Oops! Something wrong', { variant: 'error' })
        }
    }

    const inputFormHandler = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    return (
        <AuthTemplate>
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
