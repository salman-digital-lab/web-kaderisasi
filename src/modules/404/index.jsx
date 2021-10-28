/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-pascal-case */

import React from 'react'

import { Link, Button, ComponentWrapper } from '@components'

import _404Icons from './404Icons'

const _404Module = () => {
    return (
        <ComponentWrapper>
            <div className='mb-32 mt-44 flex flex-col gap-6'>
                <div className='w-32 mx-auto'>
                    <_404Icons />
                </div>
                <div className='w-full max-w-lg mx-auto text-center'>
                    <h2 className='font-bold text-bmka-primary-blue'>
                        Oops! Halaman tidak ditemukan
                    </h2>
                    <p className='mt-4 text-gray-500'>
                        Maaf, sayangnya kami tidak bisa menemukan halaman yang
                        kamu cari. Silakan kembali ke portal utama ya.
                    </p>
                </div>
                <div className='text-center'>
                    <Link href='/'>
                        <Button variant='primary'>
                            Kembali ke portal utama
                        </Button>
                    </Link>
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default _404Module
