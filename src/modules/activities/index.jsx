import React, { useState } from 'react'

import { ComponentWrapper } from '@components'

import ActivitiesModuleList from './list'
import ActivitiesModuleHeader from './header'
import ActivitiesModuleSearch from './search'

const ActivitiesModule = ({
    activityData,
    activityInfo,
    activityCategoryData,
}) => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [currentCategory, setCurrentCategory] = useState('')
    const [currentActivityInfo, setCurrentActivityInfo] = useState({
        ...activityInfo,
    })
    const [currentActivityData, setCurrentActivityData] = useState([
        ...activityData,
    ])

    const clearFilterHandler = () => {
        setSearchKeyword('')
        setCurrentCategory('')
        setCurrentActivityData(activityData)
    }

    return (
        <div>
            <ActivitiesModuleHeader />
            <ComponentWrapper>
                <ActivitiesModuleSearch
                    searchKeyword={searchKeyword}
                    currentCategory={currentCategory}
                    setSearchKeyword={setSearchKeyword}
                    setCurrentCategory={setCurrentCategory}
                    activityCategoryData={activityCategoryData}
                    setCurrentActivityData={setCurrentActivityData}
                />
                <ActivitiesModuleList
                    activityData={currentActivityData}
                    clearFilterHandler={clearFilterHandler}
                    currentActivityInfo={currentActivityInfo}
                    activityCategoryData={activityCategoryData}
                    setCurrentActivityInfo={setCurrentActivityInfo}
                />
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesModule
