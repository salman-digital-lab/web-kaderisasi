/* eslint-disable no-shadow */
/* eslint-disable @next/next/no-img-element */

import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useRef, useState } from 'react'

import { Button } from '@components'
import { getUserRoleID } from '@utils'
import { zustandStore } from '@services'

const ProfileModuleUserInfo = () => {
    const state = {
        user: zustandStore((state) => state.user),
    }

    const inputImageRef = useRef()

    const { enqueueSnackbar } = useSnackbar()
    const [profilePicURL, setProfilePicURL] = useState(state.user.file_image)

    const uploadImageOnClickHandler = () => {
        inputImageRef.current.click()
    }

    const getImageExtension = (imageName) => {
        const temp = imageName.split('.')

        return temp[temp.length - 1]
    }

    const inputImageOnChangeHandler = async (e) => {
        const { id, token } = state.user
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLImage = process.env.NEXT_PUBLIC_BASE_URL_IMAGE
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        const [file] = e.target.files
        const formData = new FormData()

        enqueueSnackbar('Uploading your image...', { variant: 'info' })

        formData.append('profile_pic', file)

        if (file.size > 2000000) {
            enqueueSnackbar('Max file size is 2 MB', { variant: 'error' })

            return
        }

        try {
            const response = await axios.put(
                `${baseURL}/${baseURLVersion}/account/user/profile_pic`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )

            setProfilePicURL(
                `${baseURLImage}/${id}.${getImageExtension(file.name)}`
            )

            enqueueSnackbar(`${response.data.message}`, { variant: 'success' })
        } catch (e) {
            enqueueSnackbar('Oops! Something wrong', { variant: 'error' })
        }
    }

    return (
        <div className='w-full max-w-xs'>
            <div className='w-full shadow-level-1 rounded-lg overflow-hidden'>
                <input
                    type='file'
                    className='hidden'
                    ref={inputImageRef}
                    accept='.png, .jpg, .jpeg'
                    onChange={inputImageOnChangeHandler}
                />
                <div className='w-full flex justify-center bg-bmka-primary-blue'>
                    <img
                        alt='Profile'
                        src={
                            `${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/${profilePicURL}` ||
                            '/assets/user_placeholder.png'
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
                    <Button
                        variant='primary'
                        onClick={uploadImageOnClickHandler}
                    >
                        Ganti foto profile
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileModuleUserInfo
