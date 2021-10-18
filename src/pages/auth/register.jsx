import React from 'react'

import { PageWrapper } from '@layout'
import { RegisterModule } from '@modules'

const register = () => {
    return (
        <PageWrapper title='Register' plain>
            <RegisterModule />
        </PageWrapper>
    )
}

export default register
