/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-pascal-case */

import React from 'react'

import { ComponentWrapper } from '@components'

import FallbackIcon from './fallbackIcon'

const Fallback = () => {
    return (
        <ComponentWrapper>
            <div className='mb-32 mt-44 flex flex-col gap-6'>
                <div className='w-32 mx-auto'>
                    <FallbackIcon />
                </div>
                <div className='w-full max-w-lg mx-auto text-center'>
                    <h2 className='font-bold text-bmka-primary-blue'>
                        Tunggu sebentar ya.
                    </h2>
                    <p className='mt-4 text-gray-500'>
                        Mohon maaf untuk ketidaknyamanannya, halaman ini sedang
                        dibuat. Mohon untuk menunggu sebentar ya!
                    </p>
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default Fallback
