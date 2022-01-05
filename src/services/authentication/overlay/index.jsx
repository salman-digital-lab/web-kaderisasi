import React from 'react'

import { BMKAFullVerticalColorIcon } from '@assets'

const AuthenticationOverlay = () => {
    return (
        <div
            id='overlay'
            className='fixed w-full h-full flex flex-col items-center justify-center bg-white'
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
