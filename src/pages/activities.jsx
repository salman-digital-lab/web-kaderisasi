import React from 'react'
import axios from 'axios'

import { PageWrapper } from '@layout'
import { ActivitiesModule } from '@modules'

const activities = ({ activity, activityCategory }) => {
    return (
        <PageWrapper title='Activities'>
            <ActivitiesModule
                activityData={activity}
                activityCategoryData={activityCategory}
            />
        </PageWrapper>
    )
}

const getStaticProps = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    const activitiesResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity`
    )
    const activitiesCategoryResponse = await axios.get(
        `${baseURL}/v1/activity-categories`
    )

    return {
        props: {
            revalidate: 10,
            activity: activitiesResponse.data.data.data,
            activityCategory: activitiesCategoryResponse.data.data,
        },
    }
}

export default activities
export { getStaticProps }
