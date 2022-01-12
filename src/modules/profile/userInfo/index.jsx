/* eslint-disable no-shadow */
/* eslint-disable @next/next/no-img-element */

import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useRef, useState } from 'react'

import { getUserRoleID } from '@utils'
import { zustandStore } from '@services'
import { Button, Jumbotron } from '@components'

const ProfileModuleUserInfo = () => {
    const state = {
        user: zustandStore((state) => state.user),
    }

    const inputImageRef = useRef()

    const { enqueueSnackbar } = useSnackbar()
    const [profilePicURL, setProfilePicURL] = useState(state.user?.file_image)

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
        <Jumbotron className='p-10'>
            <div className='w-full flex flex-col items-center'>
                <div>
                    <input
                        type='file'
                        className='hidden'
                        ref={inputImageRef}
                        accept='.png, .jpg, .jpeg'
                        onChange={inputImageOnChangeHandler}
                    />
                    <img
                        alt='Profile'
                        src={
                            profilePicURL
                                ? profilePicURL
                                : '/assets/user_placeholder.png'
                        }
                        className='w-32 h-32 object-cover rounded-full border-4 border-white bg-gray-300'
                    />
                </div>
                <div className='text-center'>
                    <div className='text-center py-6'>
                        <h2 className='text-white font-bold'>
                            {state.user.name}
                        </h2>
                        <p className='text-gray-200'>
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
        </Jumbotron>
    )
}

export default ProfileModuleUserInfo
