import React from 'react'
import axios from 'axios'

import { PageWrapper } from '@layout'
import { ProfileModule } from '@modules'

const profile = ({ educationList, provincesList, activityCategory }) => {
    return (
        <PageWrapper title='Profile'>
            <ProfileModule
                educationList={educationList}
                provincesList={provincesList}
                activityCategoryData={activityCategory}
            />
        </PageWrapper>
    )
}

const getStaticProps = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    const activitiesCategoryResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity/categories`
    )

    const educationResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/universities`
    )

    const provincesResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/regions/provinces`
    )

    return {
        props: {
            revalidate: 10,
            educationList: educationResponse.data.data,
            provincesList: provincesResponse.data.data,
            activityCategory: activitiesCategoryResponse.data.data,
        },
    }
}

export default profile
export { getStaticProps }
