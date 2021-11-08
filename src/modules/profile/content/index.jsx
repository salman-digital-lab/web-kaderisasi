/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useState, useEffect } from 'react'

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
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    const menuName = {
        default: '',
        handBook: 'handBook',
        activities: 'activities',
    }

    const { enqueueSnackbar } = useSnackbar()

    const state = {
        user: zustandStore((state) => state.user),
        setUser: zustandStore((state) => state.setUser),
    }

    const [activeMenu, setActiveMenu] = useState('')
    const [formData, setFormData] = useState({ ...state.user })
    const [regionData, setRegionData] = useState({
        regency: [],
        village: [],
        district: [],
    })

    // get regencies data
    useEffect(async () => {
        if (!formData.province_id) {
            return
        }

        try {
            const response = await axios.get(
                `${baseURL}/${baseURLVersion}/regions/regencies/${formData.province_id}`
            )

            setRegionData({ ...regionData, regency: response.data.data })
        } catch {
            enqueueSnackbar('Failed to get region data', { variant: 'error' })
        }
    }, [formData.province_id])

    // get district data
    useEffect(async () => {
        if (!formData.regency_id) {
            return
        }

        try {
            const response = await axios.get(
                `${baseURL}/${baseURLVersion}/regions/districts/${formData.regency_id}`
            )

            setRegionData({ ...regionData, district: response.data.data })
        } catch {
            enqueueSnackbar('Failed to get region data', { variant: 'error' })
        }
    }, [formData.regency_id])

    // get village data
    useEffect(async () => {
        if (!formData.district_id) {
            return
        }

        try {
            const response = await axios.get(
                `${baseURL}/${baseURLVersion}/regions/villages/${formData.district_id}`
            )

            setRegionData({ ...regionData, village: response.data.data })
        } catch {
            enqueueSnackbar('Failed to get region data', { variant: 'error' })
        }
    }, [formData.district_id])

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
                        regionData={regionData}
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
