import React from 'react'
import axios from 'axios'

import { HomeModule } from '@modules'
import { PageWrapper } from '@layout'

const index = ({ activity, activityCategory, statistics }) => {
    return (
        <PageWrapper title='Home'>
            <HomeModule
                activityData={activity}
                activityCategoryData={activityCategory}
                statistics={statistics}
            />
        </PageWrapper>
    )
}

const getServerSideProps = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    const activitiesResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity`
    )
    const activitiesCategoryResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity/categories`
    )
    const statistics = await axios.get(
        `${baseURL}/${baseURLVersion}/statistics/homepage`
    )

    return {
        props: {
            statistics: statistics.data.data,
            activity: activitiesResponse.data.data.data,
            activityCategory: activitiesCategoryResponse.data.data,
        },
    }
}

export default index
export { getServerSideProps }
