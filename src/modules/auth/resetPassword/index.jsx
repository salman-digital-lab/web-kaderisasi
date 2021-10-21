import React from 'react'

import { Button, AuthTemplate } from '@components'

import ResetPasswordModuleForm from './form'

const ResetPasswordModule = () => {
    return (
        <AuthTemplate>
            <div className='w-full h-full grid place-items-center'>
                <form className='max-w-xs flex flex-col gap-6'>
                    <div className='text-center'>
                        <h2 className='font-bold'>Ganti Password</h2>
                        <p className='text-gray-600'>
                            Silakan isi form dibawah ini dengan password yang
                            baru.
                        </p>
                    </div>
                    <div>
                        <ResetPasswordModuleForm />
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
                </form>
            </div>
        </AuthTemplate>
    )
}

export default ResetPasswordModule
