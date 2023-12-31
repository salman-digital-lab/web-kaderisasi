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
    const { jamaah, aktivis, kader, kader_lanjut } = alurKaderisasiJSON

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

            <RegenerationFlowModuleTimelineLine />

            <RegenerationFlowModuleTimelineSection>
                <RegenerationFlowKaderIcon />
                <p className='text-white w-12 text-center'>Kader Lanjut</p>
            </RegenerationFlowModuleTimelineSection>
            {kader_lanjut.map((item, index) => {
                return (
                    <div key={index}>
                        <RegenerationFlowModuleTimelineLine />

                        <RegenerationFlowModuleTimelinePoint
                            title={item.title}
                            description={item.description}
                            number={5 + index + 1}
                        />
                    </div>
                )
            })}

            <RegenerationFlowModuleTimelineLine />

            <div className='w-full'>
                <div className='w-6 h-6 my-4 mx-auto bg-blue-400 rounded-full' />
            </div>
        </div>
    )
}

export default RegenerationFlowModuleTimeline
