/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
import React from 'react'
import { PageWrapper } from '@layout'
import { ActivitesRegisterModule } from '@modules'
import axios from 'axios'

const activitiesEdit = ({ form }) => {
    let length = 0
    if (form.status === 'SUCCESS') {
        if (form.message === 'Pendaftaran tanpa kuisioner.') {
            length = 0
        } else if (form.data?.length === undefined) {
            length = 0
        } else {
            length = form.data.length
        }
    } else if (form.status === 'FAILED') {
        length = 0
    }

    return (
        <>
            <PageWrapper title='Pendaftaran Kegiatan'>
                <ActivitesRegisterModule
                    status={form.status}
                    message={form.message}
                    questionnaire={form.form}
                    length={length}
                    answers={form.answers}
                />
            </PageWrapper>
        </>
    )
}

export default activitiesEdit

export async function getServerSideProps(ctx) {
    const { req } = ctx
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const { cookies } = req
    const { slug } = ctx.params

    const questionnaire = await axios
        .get(`${baseURL}/v1/activity/${slug}/form-edit`, {
            headers: {
                Authorization: `Bearer ${cookies.user}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then((res) => {
            return res.data
        })
        .catch((error) => {
            return error.response.data
        })

    const form = JSON.parse(JSON.stringify(questionnaire))

    return {
        props: { form }, // will be passed to the page component as props
    }
}
