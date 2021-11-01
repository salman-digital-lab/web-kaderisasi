import React from 'react'

import { PageWrapper } from '@layout'
import { StudentCareModule } from '@modules'

const studentCare = () => {
    return (
        <PageWrapper title='Ruang Curhat'>
            <StudentCareModule />
        </PageWrapper>
    )
}

export default studentCare
