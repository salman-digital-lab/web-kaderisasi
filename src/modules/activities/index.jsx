import React, { useRef, useState } from 'react'

import { ComponentWrapper } from '@components'

import ActivitiesModuleList from './list'
import ActivitiesModuleHeader from './header'
import ActivitiesModuleSearch from './search'

const ActivitiesModule = ({
    activityData,
    activityInfo,
    activityCategoryData,
}) => {
    const activitiesModuleSearchRef = useRef()

    const [searchKeyword, setSearchKeyword] = useState('')
    const [currentCategory, setCurrentCategory] = useState('')
    const [currentActivityInfo, setCurrentActivityInfo] = useState({
        ...activityInfo,
    })
    const [currentActivityData, setCurrentActivityData] = useState([
        ...activityData,
    ])
    const [currentPage, setCurrentPage] = useState(1)

    const clearFilterHandler = () => {
        setSearchKeyword('')
        setCurrentCategory('')
        setCurrentPage(1)
        setCurrentActivityData(activityData)
    }

    return (
        <div>
            <ActivitiesModuleHeader />
            <ComponentWrapper>
                <ActivitiesModuleSearch
                    ref={activitiesModuleSearchRef}
                    searchKeyword={searchKeyword}
                    currentCategory={currentCategory}
                    currentPage={currentPage}
                    setSearchKeyword={setSearchKeyword}
                    setCurrentCategory={setCurrentCategory}
                    setCurrentPage={setCurrentPage}
                    setCurrentActivityInfo={setCurrentActivityInfo}
                    activityCategoryData={activityCategoryData}
                    setCurrentActivityData={setCurrentActivityData}
                />
                <ActivitiesModuleList
                    activityData={currentActivityData}
                    searchKeyword={searchKeyword}
                    currentCategory={currentCategory}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    clearFilterHandler={clearFilterHandler}
                    currentActivityInfo={currentActivityInfo}
                    activityCategoryData={activityCategoryData}
                    setCurrentActivityInfo={setCurrentActivityInfo}
                    setCurrentActivityData={setCurrentActivityData}
                    activitiesModuleSearchRef={activitiesModuleSearchRef}
                />
            </ComponentWrapper>
        </div>
    )
}

export default ActivitiesModule
