import React from 'react'
import { useRouter } from 'next/router'

import { Button } from '@components'
import { BMKAFullIcon, BMKAAuthIcon } from '@assets'

const AuthTemplateSide = () => {
    const router = useRouter()

    const backButtonHandler = () => {
        router.push('/')
    }

    return (
        <div className='flex flex-col gap-16'>
            <div className='flex items-center justify-between'>
                <div className='w-36'>
                    <BMKAFullIcon />
                </div>
                <Button
                    className='bg-white'
                    onClick={backButtonHandler}
                    textClassName='font-bold text-bmka-primary-blue'
                >
                    Kembali ke portal utama
                </Button>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-white'>Portal Aktivis Salman ITB</h1>
                <p className='text-white'>
                    Sebelum mengikuti berbagai kegiatan harap melakukan login
                    dulu ya ke akun masing - masing
                </p>
            </div>
            <div>
                <div className='w-96 mx-auto'>
                    <BMKAAuthIcon />
                </div>
            </div>
        </div>
    )
}

export default AuthTemplateSide
