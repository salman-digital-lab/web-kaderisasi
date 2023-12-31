import React from 'react'

import { LockIcon } from '@assets'
import { AuthInput } from '@components'

const ResetPasswordModuleForm = ({ onChange }) => {
    return (
        <div className='flex flex-col gap-4'>
            <AuthInput
                type='password'
                name='password'
                autoComplete='off'
                onChange={onChange}
                placeholder='New Password'
                icon={<LockIcon className='w-6' />}
                required
            />
            <AuthInput
                type='password'
                name='confirmPassword'
                autoComplete='off'
                placeholder='Confirm New Password'
                onChange={onChange}
                icon={<LockIcon className='w-6' />}
                required
            />
        </div>
    )
}

export default ResetPasswordModuleForm
