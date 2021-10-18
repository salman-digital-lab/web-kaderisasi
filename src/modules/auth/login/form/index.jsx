import React from 'react'

import { FormInput } from '@components'
import { UserIcon, LockIcon } from '@assets'

const LoginModuleForm = () => {
    return (
        <div className='flex flex-col gap-4'>
            <FormInput
                type='email'
                placeholder='Email'
                icon={<UserIcon className='w-6' />}
            />
            <FormInput
                type='password'
                placeholder='Password'
                icon={<LockIcon className='w-6' />}
            />
        </div>
    )
}

export default LoginModuleForm
