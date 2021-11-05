import React from 'react'
import axios from 'axios'

import { PageWrapper } from '@layout'
import { ProfileModule } from '@modules'

const profile = ({ activityCategory, educationList }) => {
    return (
        <PageWrapper title='Profile'>
            <ProfileModule
                educationList={educationList}
                activityCategoryData={activityCategory}
            />
        </PageWrapper>
    )
}

const getStaticProps = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    // const activitiesCategoryResponse = await axios.get(
    //     `${baseURL}/${baseURLVersion}/activity-categories`
    // )

    const educationResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/universities`
    )

    return {
        props: {
            revalidate: 10,
            activityCategory: [],
            educationList: educationResponse.data.data,
        },
    }
}

export default profile
export { getStaticProps }
