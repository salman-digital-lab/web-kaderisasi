import React from 'react'

const FormSelect = ({
    label,
    children,
    required,
    className,
    fullWidth,
    placeholder,
    ...props
}) => {
    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <p className='font-semibold'>
                    {label}
                    {required === true && (
                        <span style={{ color: 'red' }}> *</span>
                    )}
                </p>
            )}
            <div
                className={`${
                    fullWidth ? 'w-full' : ''
                } flex gap-2 items-center px-2 py-3 border-2 border-bmka-primary-blue rounded`}
            >
                <select
                    className={`w-full outline-none text-base bg-white ${
                        className ?? ''
                    }`}
                    {...props}
                >
                    {placeholder && (
                        <option value='' disabled>
                            {placeholder}
                        </option>
                    )}
                    {children}
                </select>
            </div>
        </div>
    )
}

export default FormSelect
