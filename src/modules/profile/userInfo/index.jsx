/* eslint-disable no-shadow */
/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Button } from '@components'
import { getUserRoleID } from '@utils'
import { zustandStore } from '@services'

const ProfileModuleUserInfo = () => {
    const state = {
        user: zustandStore((state) => state.user),
    }

    return (
        <div className='w-full max-w-xs'>
            <div className='w-full shadow-level-1 rounded-lg overflow-hidden'>
                <div className='w-full flex justify-center bg-bmka-primary-blue'>
                    <img
                        alt='Profile'
                        src={
                            state.user.file_image
                                ? state.user.file_image
                                : '/assets/user_placeholder.png'
                        }
                        className='w-28 h-28 object-cover rounded-full border-4 border-white transform translate-x-0 translate-y-1/2 bg-gray-300'
                    />
                </div>
                <div className='w-full pt-12 pb-4 px-4 flex flex-col items-center'>
                    <div />
                    <div className='text-center pt-6 pb-10'>
                        <p className='text-xl font-bold'>{state.user.name}</p>
                        <p className='text-gray-500'>
                            {getUserRoleID(state.user.role_id)}
                        </p>
                    </div>
                    <Button variant='primary'>Ganti foto profile</Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileModuleUserInfo
