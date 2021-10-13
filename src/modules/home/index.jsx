import React from 'react'

import { ComponentWrapper } from '@components'

import Header from './header'
import Statistics from './statistics'

const HomeModule = () => {
    return (
        <div>
            <Header />
            <ComponentWrapper>
                <Statistics />
            </ComponentWrapper>
        </div>
    )
}

export default HomeModule
