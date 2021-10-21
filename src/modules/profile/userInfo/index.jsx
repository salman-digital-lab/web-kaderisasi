/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Button } from '@components'

const ProfileModuleUserInfo = () => {
    return (
        <div>
            <div className='w-full max-w-xs shadow-level-1 rounded-lg overflow-hidden'>
                <div className='w-full flex justify-center bg-bmka-primary-blue'>
                    <img
                        alt='Profile'
                        src='/assets/user_placeholder.png'
                        className='w-28 h-28 object-cover rounded-full border-4 border-white transform translate-x-0 translate-y-1/2 bg-gray-300'
                    />
                </div>
                <div className='w-full pt-20 pb-4 px-4 flex flex-col items-center'>
                    <div />
                    <div className='text-center pt-6 pb-10'>
                        <p className='text-xl font-bold'>
                            Farhan Rafly Fahrezi Saepulloh
                        </p>
                        <p className='text-gray-500'>Jamaah</p>
                    </div>
                    <Button variant='primary'>Ganti foto profile</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileModuleUserInfo
