import React from 'react'
import axios from 'axios'

import { HomeModule } from '@modules'
import { PageWrapper } from '@layout'

const index = ({ activity }) => {
    return (
        <PageWrapper title='Home'>
            <HomeModule dataActivity={activity} />
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

export default index
export { getStaticProps }
