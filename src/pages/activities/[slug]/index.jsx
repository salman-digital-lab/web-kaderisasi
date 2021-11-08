/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import { PageWrapper } from '@layout'
import { ActivitiesDetailModule } from '@modules'

const activitiesDetail = ({
    activityList,
    activityCategory,
    activityDetailData,
}) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <PageWrapper title={slug}>
            <ActivitiesDetailModule
                activityList={activityList}
                activityCategory={activityCategory}
                activityDetailData={activityDetailData}
            />
        </PageWrapper>
    )
}

const getStaticProps = async ({ params }) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    const activitiesListResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity`
    )
    const activitiesDetailResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity/details/${params.slug}`
    )
    const activitiesCategoryResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity/categories`
    )

    return {
        props: {
            revalidate: 10,
            activityList: activitiesListResponse.data.data.data,
            activityCategory: activitiesCategoryResponse.data.data,
            activityDetailData: activitiesDetailResponse.data.data[0],
        },
    }
}

const getStaticPaths = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

    const activitiesDetailResponse = await axios.get(
        `${baseURL}/${baseURLVersion}/activity`
    )

    const activitiesDetailResponseData = activitiesDetailResponse.data.data.data

    const activitiesDetailResponseDataSlug = activitiesDetailResponseData.map(
        (item) => {
            return { params: { slug: item.slug } }
        }
    )

    return {
        fallback: true,
        paths: activitiesDetailResponseDataSlug,
    }
}

export default activitiesDetail
export { getStaticProps, getStaticPaths }
