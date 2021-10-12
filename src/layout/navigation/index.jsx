import React from 'react'
import Image from 'next/image'

import { ComponentWrapper } from '@components'

const Navigation = () => {
    return (
        <nav className='fixed left-0 top-0 w-full py-2 px-4 bg-bmka-primary-blue'>
            <ComponentWrapper>
                <div className='flex justify-between'>
                    <div>
                        <p>Logo Here</p>
                    </div>
                    <div>
                        <p>Link</p>
                    </div>
                    <div>
                        <p>User Auth</p>
                    </div>
                </div>
            </ComponentWrapper>
        </nav>
    )
}

export default Navigation
