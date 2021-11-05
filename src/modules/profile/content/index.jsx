import React, { useState } from 'react'

import ProfileModuleContentMenu from './menu'
import ProfileModuleContentHandBook from './handBook'
import ProfileModuleContentActivities from './activities'
import ProfileModuleContentPersonalData from './personalData'

const ProfileModuleContent = ({ educationList, activityCategoryData }) => {
    const menuName = {
        default: '',
        handBook: 'handBook',
        activities: 'activities',
    }

    const [activeMenu, setActiveMenu] = useState('')

    return (
        <div className='w-full'>
            <ProfileModuleContentMenu
                menuName={menuName}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
            <div className='w-full pt-10'>
                {activeMenu === menuName.default && (
                    <ProfileModuleContentPersonalData
                        educationList={educationList}
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
