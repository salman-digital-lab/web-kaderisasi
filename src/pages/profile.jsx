import React from 'react'
import axios from 'axios'

import { PageWrapper } from '@layout'
import { ProfileModule } from '@modules'

const profile = ({ activityCategory }) => {
    return (
        <PageWrapper title='Profile'>
            <ProfileModule activityCategoryData={activityCategory} />
        </PageWrapper>
    )
}

const getStaticProps = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    const activitiesCategoryResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity-categories`
    )

    return {
        props: {
            revalidate: 10,
            activityCategory: activitiesCategoryResponse.data.data,
        },
    }
}

export default profile
export { getStaticProps }
