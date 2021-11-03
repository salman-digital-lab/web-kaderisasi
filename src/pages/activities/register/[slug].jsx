import React from 'react'
import { PageWrapper } from '@layout'
import ActivitesRegister from '../../../modules/activitiesRegister'

const activitiesRegister = ({ slug }) => {
    return (
        <>
            <PageWrapper title='Pendaftaran Kegiatan'>
                <ActivitesRegister slug={slug} />
            </PageWrapper>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const { slug } = ctx.params
    return {
        props: { slug }, // will be passed to the page component as props
    }
}

export default activitiesRegister
