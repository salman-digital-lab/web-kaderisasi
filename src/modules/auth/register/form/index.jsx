import React from 'react'

import { FormInput } from '@components'
import { EmailIcon, UserIcon, LockIcon } from '@assets'

const RegisterModuleForm = () => {
    return (
        <div className='flex flex-col gap-4'>
            <FormInput
                type='text'
                placeholder='Name'
                icon={<UserIcon className='w-6' />}
            />
            <FormInput
                type='email'
                placeholder='Email'
                icon={<EmailIcon className='w-6' />}
            />
            <FormInput
                type='password'
                placeholder='Password'
                icon={<LockIcon className='w-6' />}
            />
            <FormInput
                type='password'
                placeholder='Confirm Password'
                icon={<LockIcon className='w-6' />}
            />
        </div>
    )
}

export default RegisterModuleForm
