import React from 'react'

import { BMKAFullVerticalColorIcon } from '@assets'

const AuthenticationOverlay = () => {
    return (
        <div
            style={{ zIndex: 999 }}
            className='fixed w-full h-full flex flex-col items-center justify-center'
        >
            <div>
                <div className='w-40 mx-auto'>
                    <BMKAFullVerticalColorIcon />
                </div>
            </div>
        </div>
    )
}

export default AuthenticationOverlay
