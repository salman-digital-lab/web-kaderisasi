import React from 'react'

import { Button } from '@components'

const ProfileModuleContentMenu = ({ menuName, activeMenu, setActiveMenu }) => {
    const buttonVariant = (name) => {
        if (name === activeMenu) {
            return 'primary'
        }

        return 'disable'
    }

    const buttonOnClickHandler = (name) => {
        setActiveMenu(name)
    }

    return (
        <div className='flex gap-4'>
            <Button
                variant={buttonVariant(menuName.default)}
                onClick={() => buttonOnClickHandler(menuName.default)}
            >
                Profil
            </Button>
            <Button
                variant={buttonVariant(menuName.activities)}
                onClick={() => buttonOnClickHandler(menuName.activities)}
            >
                Kegiatan
            </Button>
            <Button
                variant={buttonVariant(menuName.studentCare)}
                onClick={() => buttonOnClickHandler(menuName.studentCare)}
            >
                Ruang Curhat
            </Button>
            <Button
                variant={buttonVariant(menuName.handBook)}
                onClick={() => buttonOnClickHandler(menuName.handBook)}
            >
                Buku Saku
            </Button>
        </div>
    )
}

export default ProfileModuleContentMenu
