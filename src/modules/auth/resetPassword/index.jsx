import React, { useState } from 'react'
import { Button, AuthTemplate } from '@components'
import axios from 'axios'
import router, { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import ResetPasswordModuleForm from './form'

const ResetPasswordModule = () => {
    const { query } = useRouter()
    const { enqueueSnackbar } = useSnackbar()
    const { token } = query

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()

        enqueueSnackbar('Update Password...', { variant: 'info' })
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL

        try {
            const data = await axios.put(
                `${baseURL}/v1/account/reset_password/${token}`,
                {
                    new_password: password,
                    password_confirmation: confirmPassword,
                }
            )

            const { message } = await data.data

            enqueueSnackbar(message, { variant: 'success' })
            router.replace('/login')
        } catch (error) {
            if (error.response.status === 404) {
                enqueueSnackbar('Invalid Token', { variant: 'error' })
            } else if (error.response.status === 400) {
                enqueueSnackbar('Konfirmasi password salah', {
                    variant: 'error',
                })
            } else {
                enqueueSnackbar('Error', { variant: 'error' })
            }
        }
    }

    const inputFormHandler = (e) => {
        const element = e.target
        const { value, name } = element
        if (name === 'password') {
            setPassword(value)
        } else {
            setConfirmPassword(value)
        }
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
                Kembali ke portal utama
            </Button>
            <div className='w-full h-full grid place-items-center'>
                <form
                    onSubmit={submitHandler}
                    className='max-w-xs flex flex-col gap-6'
                >
                    <div className='text-center'>
                        <h2 className='font-bold'>Ganti Password</h2>
                        <p className='text-gray-600'>
                            Silakan isi form dibawah ini dengan password yang
                            baru.
                        </p>
                    </div>
                    <div>
                        <ResetPasswordModuleForm
                            onChange={inputFormHandler}
                            submit={submitHandler}
                        />
                    </div>
                    <div>
                        <Button
                            type='submit'
                            variant='primary'
                            className='w-full'
                        >
                            Ganti
                        </Button>
                    </div>
                </form>
            </div>
        </AuthTemplate>
    )
}

export default ResetPasswordModule
