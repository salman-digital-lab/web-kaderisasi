import React, { useState } from 'react'

import ProfileModuleContentMenu from './menu'
import ProfileModuleContentHandBook from './handBook'
import ProfileModuleContentActivities from './activities'
import ProfileModuleContentPersonalData from './personalData'

const ProfileModuleContent = () => {
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
            <div className='w-full'>
                {activeMenu === menuName.default && (
                    <ProfileModuleContentPersonalData />
                )}
                {activeMenu === menuName.activities && (
                    <ProfileModuleContentActivities />
                )}
                {activeMenu === menuName.handBook && (
                    <ProfileModuleContentHandBook />
                )}
            </div>
        </div>
    )
}

export default ProfileModuleContent
