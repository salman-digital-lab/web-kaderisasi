import React from 'react'
import axios from 'axios'

import { PageWrapper } from '@layout'
import { ActivitiesModule } from '@modules'

const activities = ({ activity }) => {
    return (
        <PageWrapper title='Activities'>
            <ActivitiesModule activityData={activity} />
        </PageWrapper>
    )
}

const getStaticProps = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL

    const response = await axios.get(`${baseURL}/v1/activity`)

    return {
        props: {
            revalidate: 10,
            activity: response.data.data.data,
        },
    }
}

export default activities
export { getStaticProps }
