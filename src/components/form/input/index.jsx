import React from 'react'

const FormInput = ({ icon, ...props }) => {
    return (
        <div className='flex gap-2 items-center px-2 py-3 border-2 border-gray-500 rounded'>
            {icon && icon}
            <input
                spellCheck='false'
                className='w-full outline-none'
                {...props}
            />
        </div>
    )
}

export default FormInput
