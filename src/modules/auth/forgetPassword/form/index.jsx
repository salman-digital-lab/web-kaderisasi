import React from 'react'

import { AuthInput } from '@components'
import { EmailIcon } from '@assets'

const ForgetPasswordModuleForm = ({ formData, inputFormHandler }) => {
    const { email } = formData

    return (
        <div className='flex flex-col gap-4'>
            <AuthInput
                type='email'
                name='email'
                value={email}
                autoComplete='off'
                placeholder='Email'
                onChange={inputFormHandler}
                icon={<EmailIcon className='w-6' />}
                required
            />
        </div>
    )
}

export default ForgetPasswordModuleForm
