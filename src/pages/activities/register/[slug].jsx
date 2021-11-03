/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
import React from 'react'
import { PageWrapper } from '@layout'
import { ActivitesRegisterModule } from '@modules'
import axios from 'axios'

const activitiesRegister = ({ form }) => {
    return (
        <>
            <PageWrapper title='Pendaftaran Kegiatan'>
                <ActivitesRegisterModule
                    status={form.status}
                    message={form.message}
                />
            </PageWrapper>
        </>
    )
}

export default activitiesRegister

export async function getServerSideProps(ctx) {
    const { req } = ctx
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const { cookies } = req
    const { slug } = ctx.params

    const questionnaire = await axios
        .get(`${baseURL}/v1/activity/register/${slug}`, {
            headers: {
                Authorization: `Bearer ${cookies.user}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then((res) => {
            return res
        })
        .catch((error) => {
            return error.response.data
        })

    const form = JSON.parse(JSON.stringify(questionnaire))

    return {
        props: { form }, // will be passed to the page component as props
    }
}
