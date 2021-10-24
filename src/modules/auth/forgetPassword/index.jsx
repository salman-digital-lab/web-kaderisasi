import React from 'react'

import { withoutUserAuthentication } from '@hoc'
import { Link, Button, AuthTemplate } from '@components'

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
