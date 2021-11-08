/* eslint-disable no-shadow */

import React, { useState } from 'react'

import { zustandStore } from '@services'

import ProfileModuleContentMenu from './menu'
import ProfileModuleContentHandBook from './handBook'
import ProfileModuleContentActivities from './activities'
import ProfileModuleContentPersonalData from './personalData'

const ProfileModuleContent = ({
    educationList,
    provincesList,
    activityCategoryData,
}) => {
    const menuName = {
        default: '',
        handBook: 'handBook',
        activities: 'activities',
    }

    const state = {
        user: zustandStore((state) => state.user),
        setUser: zustandStore((state) => state.setUser),
    }

    const [activeMenu, setActiveMenu] = useState('')
    const [formData, setFormData] = useState({ ...state.user })

    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <ProfileModuleContentMenu
                    menuName={menuName}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            </div>
            <div className='w-full pt-10'>
                {activeMenu === menuName.default && (
                    <ProfileModuleContentPersonalData
                        formData={formData}
                        setFormData={setFormData}
                        educationList={educationList}
                        provincesList={provincesList}
                    />
                )}
                {activeMenu === menuName.activities && (
                    <ProfileModuleContentActivities
                        activityCategoryData={activityCategoryData}
                    />
                )}
                {activeMenu === menuName.handBook && (
                    <ProfileModuleContentHandBook />
                )}
            </div>
        </div>
    )
}

export default ProfileModuleContent
