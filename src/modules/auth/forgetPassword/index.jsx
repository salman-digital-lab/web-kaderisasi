import React from 'react'

import { Button, AuthTemplate } from '@components'

import ForgetPasswordModuleForm from './form'

const ForgetPasswordModule = () => {
    return (
        <AuthTemplate>
            <div className='w-full h-full grid place-items-center'>
                <form className='max-w-xs flex flex-col gap-6'>
                    <div className='text-center'>
                        <h2 className='font-bold'>Lupa Password</h2>
                        <p className='text-gray-600'>
                            Silakan isi form dibawah ini dengan email akun anda.
                        </p>
                    </div>
                    <div>
                        <ForgetPasswordModuleForm />
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
                </form>
            </div>
        </AuthTemplate>
    )
}

export default ForgetPasswordModule
