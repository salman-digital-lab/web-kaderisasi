import React from 'react'

import { ComponentWrapper } from '@components'

import Header from './header'
import Statistics from './statistics'
import StudentCare from './studentCare'

const HomeModule = () => {
    return (
        <div>
            <Header />
            <ComponentWrapper>
                <Statistics />
                <StudentCare />
            </ComponentWrapper>
        </div>
    )
}

export default HomeModule
