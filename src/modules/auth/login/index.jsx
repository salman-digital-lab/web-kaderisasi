/* eslint-disable no-shadow */

import axios from 'axios'
import cookies from 'js-cookie'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { ArrowLeftIcon } from '@assets'
import { zustandStore } from '@services'
import { withoutUserAuthentication } from '@hoc'
import { Link, Button, AuthTemplate } from '@components'

import LoginModuleForm from './form'

const LoginModule = () => {
    const router = useRouter()

    const { enqueueSnackbar } = useSnackbar()

    const state = {
        setUser: zustandStore((state) => state.setUser),
    }

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

        const { setUser } = state
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLImage = process.env.NEXT_PUBLIC_BASE_URL_IMAGE
        const userCookieName = process.env.NEXT_PUBLIC_KEY_COOKIES_USER
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        const { email, password } = formData

        await axios
            .post(`${baseURL}/${baseURLVersion}/auth`, {
                email,
                password,
            })
            .then((res) => {
                const { data, token, message } = res.data

                setUser({
                    ...data,
                    token,
                    file_image: `${baseURLImage}/${data.file_image}`,
                })

                cookies.set(userCookieName, token)

                enqueueSnackbar(message, { variant: 'success' })

                // redirect to profile by withoutUserAuthentication HOC
            })
            .catch((error) => {
                if (error.response) {
                    enqueueSnackbar(error.response.data.message, {
                        variant: 'error',
                    });
                } else {
                    let requestInfo = '';
                    if (error.request) {
                        requestInfo = JSON.stringify(error.request);
                    }
                    
                    let configInfo = JSON.stringify(error.config);
                    
                    enqueueSnackbar(requestInfo || error.message, {
                        variant: 'error',
                    });
                    
                    if (configInfo !== '{}') {
                        enqueueSnackbar(configInfo, {
                            variant: 'error',
                        });
                    }
                }
            });
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
                                <Link href='/forget-password'>Reset</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </AuthTemplate>
    )
}

export default withoutUserAuthentication(LoginModule)
