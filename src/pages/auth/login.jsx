import React from 'react'

import { PageWrapper } from '@layout'
import { LoginModule } from '@modules'

const login = () => {
    return (
        <PageWrapper title='Log In' plain>
            <LoginModule />
        </PageWrapper>
    )
}

export default login
