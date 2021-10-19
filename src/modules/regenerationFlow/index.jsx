import React from 'react'

import { ComponentWrapper } from '@components'

import RegenerationFlowModuleHeader from './header'
import RegenerationFlowModuleTimeline from './timeline'

const RegenerationFlowModule = () => {
    return (
        <div>
            <RegenerationFlowModuleHeader />
            <ComponentWrapper>
                <div className='py-16'>
                    <div className='text-center'>
                        <h2 className='font-bold text-bmka-primary-blue'>
                            Bagaimana tahapannya ?
                        </h2>
                    </div>
                    <RegenerationFlowModuleTimeline />
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default RegenerationFlowModule
