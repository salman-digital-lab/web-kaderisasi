import React from 'react'

import { PageWrapper } from '@layout'
import { LoginModule } from '@modules'

const login = () => {
    return (
        <PageWrapper title='Login' plain>
            <LoginModule />
        </PageWrapper>
    )
}

export default login
