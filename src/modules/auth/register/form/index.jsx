import React from 'react'

import { AuthInput } from '@components'
import { EmailIcon, UserIcon, LockIcon } from '@assets'

const RegisterModuleForm = ({ formData, inputFormHandler }) => {
    const { name, email, password, confirmPassword } = formData

    return (
        <div className='flex flex-col gap-4'>
            <AuthInput
                type='text'
                name='name'
                value={name}
                autoComplete='off'
                placeholder='Name'
                onChange={inputFormHandler}
                icon={<UserIcon className='w-6' />}
                required
            />
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
            <AuthInput
                type='password'
                name='password'
                value={password}
                autoComplete='off'
                placeholder='Password'
                onChange={inputFormHandler}
                icon={<LockIcon className='w-6' />}
                required
            />
            <AuthInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                autoComplete='off'
                placeholder='Confirm Password'
                onChange={inputFormHandler}
                icon={<LockIcon className='w-6' />}
                required
            />
        </div>
    )
}

export default RegisterModuleForm
