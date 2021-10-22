import React from 'react'

import { Button } from '@components'

import ProfileModuleContentPersonalDataTitle from './title'
import ProfileModuleContentPersonalDataContact from './contact'
import ProfileModuleContentPersonalDataPersonal from './personal'
import ProfileModuleContentPersonalDataDomisili from './domisili'
import ProfileModuleContentPersonalDataEducation from './education'

const ProfileModuleContentPersonalData = () => {
    const formSubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <h3 className='font-bold'>Profil</h3>
            <div className='flex flex-wrap gap-6 mt-4'>
                <div className='w-full max-w-sm'>
                    <ProfileModuleContentPersonalDataTitle>
                        Personal
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataPersonal />
                </div>
                <div className='w-full max-w-sm'>
                    <ProfileModuleContentPersonalDataTitle>
                        Kampus
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataEducation />
                </div>
                <div className='w-full max-w-sm'>
                    <ProfileModuleContentPersonalDataTitle>
                        Domisili
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataDomisili />
                </div>
                <div className='w-full max-w-sm'>
                    <ProfileModuleContentPersonalDataTitle>
                        Kontak
                    </ProfileModuleContentPersonalDataTitle>
                    <ProfileModuleContentPersonalDataContact />
                </div>
            </div>
            <div className='flex justify-end gap-4 mt-8'>
                <Button
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
