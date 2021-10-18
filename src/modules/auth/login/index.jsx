import React from 'react'

import { Link, Button, AuthTemplate } from '@components'

import LoginModuleForm from './form'

const LoginModule = () => {
    return (
        <AuthTemplate>
            <div className='w-full h-full grid place-items-center'>
                <div className='flex flex-col gap-6'>
                    <div className='text-center'>
                        <h2 className='font-bold'>Masuk Akun</h2>
                        <p className='text-gray-600'>
                            Silakan isi form dibawah ini dengan benar
                        </p>
                    </div>
                    <div>
                        <LoginModuleForm />
                    </div>
                    <div>
                        <Button variant='primary' className='w-full'>
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
                    </div>
                </div>
            </div>
        </AuthTemplate>
    )
}

export default LoginModule
