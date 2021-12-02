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
    const [regencyData, setRegencyData] = useState([])
    const [villageData, setVillageData] = useState([])
    const [districtData, setDistrictData] = useState([])
    const [listChecklist, setListChecklist] = useState([])
    const [userChecklist, setUserChecklist] = useState([])
    const [userActivities, setUserActivities] = useState([])
    const [formData, setFormData] = useState({ ...state.user })

    useEffect(async () => {
        try {
            const { token } = state.user

            const activitiesResponse = await axios.get(
                `${baseURL}/${baseURLVersion}/account/user/activities`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            const checklistResponse = await axios.get(
                `${baseURL}/${baseURLVersion}/checklist`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            const checklistMemberResponse = await axios.get(
                `${baseURL}/${baseURLVersion}/checklist/member`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            setListChecklist(checklistResponse.data.data.data)
            setUserChecklist(checklistMemberResponse.data.data)
            setUserActivities(activitiesResponse.data.data.data)
        } catch {
            setListChecklist([])
            setUserChecklist([])
            setUserActivities([])
        }
    }, [])

    // get regencies data
    useEffect(async () => {
        if (!formData.province_id) {
            return
        }

        try {
            const response = await axios.get(
                `${baseURL}/${baseURLVersion}/regions/regencies/${formData.province_id}`
            )

            setRegencyData(response.data.data)
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

            setDistrictData(response.data.data)
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

            setVillageData(response.data.data)
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
                        token={state.user.token}
                        setFormData={setFormData}
                        educationList={educationList}
                        provincesList={provincesList}
                        regionData={{
                            regency: regencyData,
                            district: districtData,
                            village: villageData,
                        }}
                    />
                )}
                {activeMenu === menuName.activities && (
                    <ProfileModuleContentActivities
                        userActivities={userActivities}
                        activityCategoryData={activityCategoryData}
                    />
                )}
                {activeMenu === menuName.handBook && (
                    <ProfileModuleContentHandBook
                        token={state.user.token}
                        listChecklist={listChecklist}
                        userChecklist={userChecklist}
                        setUserChecklist={setUserChecklist}
                    />
                )}
            </div>
        </div>
    )
}

export default ProfileModuleContent
