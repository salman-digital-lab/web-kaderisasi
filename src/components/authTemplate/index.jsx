import React from 'react'

import AuthTemplateSide from './side'

const AuthTemplate = ({ children }) => {
    return (
        <div
            style={{ gridTemplateColumns: '1fr 1fr' }}
            className='fixed w-full h-full md:grid overflow-y-auto'
        >
            <div className='w-full h-full p-6 bg-white'>{children}</div>
            <div className='hidden md:block w-full h-full p-6 bg-bmka-primary-blue'>
                <AuthTemplateSide />
            </div>
        </div>
    )
}

export default AuthTemplate
