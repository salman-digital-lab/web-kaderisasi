import React from 'react'

import { AuthInput } from '@components'
import { EmailIcon } from '@assets'

const ForgetPasswordModuleForm = () => {
    return (
        <div className='flex flex-col gap-4'>
            <AuthInput
                type='email'
                name='email'
                autoComplete='off'
                placeholder='Email'
                icon={<EmailIcon className='w-6' />}
                required
            />
        </div>
    )
}

export default ForgetPasswordModuleForm
