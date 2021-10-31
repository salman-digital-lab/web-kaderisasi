import React from 'react'

import { Jumbotron, ComponentWrapper } from '@components'

import ActivitiesDetailModuleBanner from './banner'

const ActivitiesDetailModule = ({ activityDetailData }) => {
    return (
        <div>
            <Jumbotron>
                <h1 className='text-center text-white'>
                    {activityDetailData.name}
                </h1>
            </Jumbotron>
            <ComponentWrapper>
                <div>
                    {/* <ActivitiesDetailModuleBanner
                        images={activityDetailData.images}
                    /> */}
                </div>
                <div>
                    <p>test</p>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesDetailModule
