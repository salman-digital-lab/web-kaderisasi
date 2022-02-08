import axios from 'axios'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

import { withoutUserAuthentication } from '@hoc'
import { Link, Button, AuthTemplate } from '@components'

import { ArrowLeftIcon } from '@assets'
import RegisterModuleForm from './form'

const RegisterModule = () => {
    const router = useRouter()

    const { enqueueSnackbar } = useSnackbar()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const inputFormHandler = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault()

        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        const { name, email, password, confirmPassword } = formData

        if (password !== confirmPassword) {
            enqueueSnackbar('Password didnt match', { variant: 'error' })

            return
        }

        await axios
            .post(`${baseURL}/${baseURLVersion}/account/register`, {
                name,
                email,
                password,
                is_subscribing: 1,
            })
            .then((res) => {
                if (res.status === 200) {
                    enqueueSnackbar(res.data.message, { variant: 'success' })
                }
                router.push('/login')
            })
            .catch((err) => {
                enqueueSnackbar(err.response.data.message, { variant: 'error' })
            })
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
                    className='flex flex-col gap-6'
                >
                    <div className='text-center'>
                        <h2 className='font-bold'>Daftar Akun</h2>
                        <p className='text-gray-600'>
                            Silakan isi form dibawah ini dengan benar
                        </p>
                    </div>
                    <div>
                        <RegisterModuleForm
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
                            Daftar
                        </Button>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-600'>
                            Sudah punya akun ?{' '}
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

export default withoutUserAuthentication(RegisterModule)
