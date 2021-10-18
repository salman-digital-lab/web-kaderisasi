import React from 'react'

import { ComponentWrapper } from '@components'

const AuthTemplate = ({ children }) => {
    return (
        <div className='fixed w-full h-full flex'>
            <div className='w-full h-full bg-white' />
            <div className='w-full h-full bg-bmka-primary-blue' />
            <div className='fixed w-full h-full'>
                <ComponentWrapper className='h-full'>
                    <div className='flex w-full h-full'>
                        <div className='w-full h-full p-6 bg-white'>
                            {children}
                        </div>
                        <div className='w-full h-full p-6 bg-bmka-primary-blue'>
                            <p>test</p>
                        </div>
                    </div>
                </ComponentWrapper>
            </div>
        </div>
    )
}

export default AuthTemplate
