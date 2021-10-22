import React, { useState } from 'react'

import ProfileModuleContentMenu from './menu'
import ProfileModuleContentHandBook from './handBook'
import ProfileModuleContentActivities from './activities'
import ProfileModuleContentPersonalData from './personalData'

const ProfileModuleContent = ({ activityCategoryData }) => {
    const menuName = {
        default: '',
        handBook: 'handBook',
        activities: 'activities',
    }

    const [activeMenu, setActiveMenu] = useState('')

    return (
        <div>
            <ProfileModuleContentMenu
                menuName={menuName}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />
            <div className='w-full pt-10'>
                {activeMenu === menuName.default && (
                    <ProfileModuleContentPersonalData />
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
