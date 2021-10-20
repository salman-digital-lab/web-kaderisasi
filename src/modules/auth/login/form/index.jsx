import React from 'react'

import { FormInput } from '@components'
import { UserIcon, LockIcon } from '@assets'

const LoginModuleForm = ({ formData, inputFormHandler }) => {
    const { email, password } = formData

    return (
        <div className='flex flex-col gap-4'>
            <FormInput
                type='email'
                name='email'
                value={email}
                autoComplete='off'
                placeholder='Email'
                onChange={inputFormHandler}
                icon={<UserIcon className='w-6' />}
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                autoComplete='off'
                placeholder='Password'
                onChange={inputFormHandler}
                icon={<LockIcon className='w-6' />}
                required
            />
        </div>
    )
}

export default LoginModuleForm
