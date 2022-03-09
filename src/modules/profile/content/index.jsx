/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useRef, useState, useEffect } from 'react'

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

    const firstRender = useRef(true)

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
    const [isLoadingRegion, setIsLoadingRegion] = useState(true)
    const [formData, setFormData] = useState({ ...state.user })

    const getRegencyData = async (id) => {
        const response = await axios.get(
            `${baseURL}/${baseURLVersion}/regions/regencies/${id}`
        )

        return await response.data.data
    }

    const getDistrictData = async (id) => {
        const response = await axios.get(
            `${baseURL}/${baseURLVersion}/regions/districts/${id}`
        )

        return await response.data.data
    }

    const getVillageData = async (id) => {
        const response = await axios.get(
            `${baseURL}/${baseURLVersion}/regions/villages/${id}`
        )

        return await response.data.data
    }

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
            setUserActivities(activitiesResponse.data.data)
        } catch {
            setListChecklist([])
            setUserChecklist([])
            setUserActivities([])
        }
    }, [])

    useEffect(async () => {
        const { province_id, regency_id, district_id } = formData

        try {
            if (province_id) {
                const regencyResponse = await getRegencyData(province_id)

                setRegencyData([...regencyResponse])
            }

            if (regency_id) {
                const districtResponse = await getDistrictData(regency_id)

                setDistrictData([...districtResponse])
            }

            if (district_id) {
                const villageResponse = await getVillageData(district_id)

                setVillageData([...villageResponse])
            }
        } catch (error) {
            enqueueSnackbar('Error getting region data', { variant: 'error' })
        }
    }, [])

    // Province Change Listener
    useEffect(async () => {
        const { province_id } = formData

        if (firstRender.current) {
            return
        }

        try {
            const regencyResponse = await getRegencyData(province_id)
            const districtResponse = await getDistrictData(
                regencyResponse[0].id
            )
            const villageResponse = await getVillageData(districtResponse[0].id)

            setFormData({
                ...formData,
                regency_id: regencyResponse[0].id,
                district_id: districtResponse[0].id,
                village_id: villageResponse[0].id,
            })

            setRegencyData([...regencyResponse])
            setDistrictData([...districtResponse])
            setVillageData([...villageResponse])
        } catch (error) {
            enqueueSnackbar('Error getting region data', { variant: 'error' })
        }
    }, [formData.province_id])

    // Regency Change Listerner
    useEffect(async () => {
        const { regency_id } = formData

        if (firstRender.current) {
            return
        }

        try {
            const districtResponse = await getDistrictData(regency_id)
            const villageResponse = await getVillageData(districtResponse[0].id)

            setFormData({
                ...formData,
                district_id: districtResponse[0].id,
                village_id: villageResponse[0].id,
            })

            setDistrictData([...districtResponse])
            setVillageData([...villageResponse])
        } catch (error) {
            enqueueSnackbar('Error getting region data', { variant: 'error' })
        }
    }, [formData.regency_id])

    // Village Change Listener
    useEffect(async () => {
        const { district_id } = formData

        if (firstRender.current) {
            return
        }

        try {
            const villageResponse = await getVillageData(district_id)

            setFormData({
                ...formData,
                village_id: villageResponse[0].id,
            })

            setVillageData([...villageResponse])
        } catch (error) {
            enqueueSnackbar('Error getting region data', { variant: 'error' })
        }
    }, [formData.district_id])

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        }
    }, [])

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
                        userActivitiesData={userActivities.data}
                        activityCategoryData={activityCategoryData}
                        userActivitiesInfo={userActivities.meta}
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
