/* eslint-disable react/no-array-index-key */

import React from 'react'

import { alurKaderisasiJSON } from '@json'
import {
    RegenerationFlowKaderIcon,
    RegenerationFlowJamaahIcon,
    RegenerationFlowAktivisIcon,
} from '@assets'

import RegenerationFlowModuleTimelineLine from './line'
import RegenerationFlowModuleTimelinePoint from './point'
import RegenerationFlowModuleTimelineSection from './section'

const RegenerationFlowModuleTimeline = () => {
    const { jamaah, aktivis, kader } = alurKaderisasiJSON

    return (
        <div className='mt-12'>
            <RegenerationFlowModuleTimelineSection>
                <RegenerationFlowJamaahIcon />
                <p className='text-white'>Jamaah</p>
            </RegenerationFlowModuleTimelineSection>
            {jamaah.map((item, index) => {
                return (
                    <div key={index}>
                        <RegenerationFlowModuleTimelineLine />
                        <RegenerationFlowModuleTimelinePoint
                            number={index + 1}
                            title={item.title}
                            description={item.description}
                        />
                    </div>
                )
            })}

            <RegenerationFlowModuleTimelineLine />

            <RegenerationFlowModuleTimelineSection>
                <RegenerationFlowAktivisIcon />
                <p className='text-white'>Aktivis</p>
            </RegenerationFlowModuleTimelineSection>
            {aktivis.map((item, index) => {
                return (
                    <div key={index}>
                        <RegenerationFlowModuleTimelineLine />

                        <RegenerationFlowModuleTimelinePoint
                            title={item.title}
                            description={item.description}
                            number={jamaah.length + index + 1}
                        />
                    </div>
                )
            })}

            <RegenerationFlowModuleTimelineLine />

            <RegenerationFlowModuleTimelineSection>
                <RegenerationFlowKaderIcon />
                <p className='text-white'>Kader</p>
            </RegenerationFlowModuleTimelineSection>
            {kader.map((item, index) => {
                return (
                    <div key={index}>
                        <RegenerationFlowModuleTimelineLine />

                        <RegenerationFlowModuleTimelinePoint
                            title={item.title}
                            description={item.description}
                            number={aktivis.length + index + 1}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default RegenerationFlowModuleTimeline
