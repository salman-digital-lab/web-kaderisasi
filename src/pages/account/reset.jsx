import React from 'react'

import { PageWrapper } from '@layout'
import { ResetPasswordModule } from '@modules'

const resetPassword = () => {
    return (
        <PageWrapper title='Reset Password' plain>
            <ResetPasswordModule />
        </PageWrapper>
    )
}

export default resetPassword
