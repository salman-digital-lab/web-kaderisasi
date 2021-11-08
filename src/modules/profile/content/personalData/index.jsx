/* eslint-disable no-shadow */

import React from 'react'
import cookies from 'js-cookie'
import { useSnackbar } from 'notistack'

import { Button } from '@components'
import { zustandStore } from '@services'

import ProfileModuleContentPersonalDataTitle from './title'
import ProfileModuleContentPersonalDataContact from './contact'
import ProfileModuleContentPersonalDataPersonal from './personal'
import ProfileModuleContentPersonalDataDomisili from './domisili'
import ProfileModuleContentPersonalDataEducation from './education'

const ProfileModuleContentPersonalData = ({
    formData,
    regionData,
    setFormData,
    educationList,
    provincesList,
}) => {
    const state = {
        setUser: zustandStore((state) => state.setUser),
    }

    const { enqueueSnackbar } = useSnackbar()

    const formSubmitHandler = (e) => {
        e.preventDefault()
    }

    const formOnChangeHandler = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const logOutButtonHandler = () => {
        const { setUser } = state
        const userCookieName = process.env.NEXT_PUBLIC_KEY_COOKIES_USER

        setUser(null)
        cookies.set(userCookieName, '')

        enqueueSnackbar('You have been logged out', { variant: 'error' })

        // redirect to login by withUserAuthentication HOC
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='flex flex-wrap justify-center gap-6 mt-4'>
                <div className='w-full max-w-xs'>
                    <ProfileModuleContentPersonalDataTitle>
                        Personal
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataPersonal
                        formData={formData}
                        formOnChangeHandler={formOnChangeHandler}
                    />
                </div>
                <div className='w-full max-w-xs'>
                    <ProfileModuleContentPersonalDataTitle>
                        Kampus
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataEducation
                        formData={formData}
                        educationList={educationList}
                        formOnChangeHandler={formOnChangeHandler}
                    />
                </div>
                <div className='w-full max-w-xs'>
                    <ProfileModuleContentPersonalDataTitle>
                        Domisili
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataDomisili
                        formData={formData}
                        regionData={regionData}
                        provincesList={provincesList}
                        formOnChangeHandler={formOnChangeHandler}
                    />
                </div>
                <div className='w-full max-w-xs'>
                    <ProfileModuleContentPersonalDataTitle>
                        Kontak
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataContact
                        formData={formData}
                        formOnChangeHandler={formOnChangeHandler}
                    />
                </div>
            </div>
            <div className='flex justify-end gap-4 mt-8'>
                <Button
                    onClick={logOutButtonHandler}
                    textClassName='text-white font-bold'
                    className='bg-red-500 border-2 border-red-500'
                >
                    Log Out
                </Button>
                <Button type='submit' variant='primary'>
                    Update
                </Button>
            </div>
        </form>
    )
}

export default ProfileModuleContentPersonalData
