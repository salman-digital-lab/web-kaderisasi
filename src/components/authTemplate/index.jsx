import React from 'react'

import AuthTemplateSide from './side'

const AuthTemplate = ({ children }) => {
    return (
        <div
            style={{ gridTemplateColumns: '1fr 1fr' }}
            className='fixed w-full h-full grid overflow-y-auto'
        >
            <div className='w-full p-6 bg-white'>{children}</div>
            <div className='w-full p-6 bg-bmka-primary-blue'>
                <AuthTemplateSide />
            </div>
        </div>
    )
}

export default AuthTemplate
