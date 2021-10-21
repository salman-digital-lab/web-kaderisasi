import React from 'react'

import { PageWrapper } from '@layout'
import { ForgetPasswordModule } from '@modules'

const forgetPassword = () => {
    return (
        <PageWrapper title='Forget Password' plain>
            <ForgetPasswordModule />
        </PageWrapper>
    )
}

export default forgetPassword
