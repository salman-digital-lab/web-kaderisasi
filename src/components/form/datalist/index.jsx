import React from 'react'

const FormDatalist = ({
    label,
    children,
    required,
    className,
    fullWidth,
    placeholder,
    defaultValue,
    onChange,
    name,
    campusName,
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
                <input
                    list='datalist'
                    className='w-full outline-none text-base bg-white '
                    onChange={onChange}
                    name={name}
                    value={campusName}
                />
                <datalist
                    className={`w-full outline-none text-base bg-white ${
                        className ?? ''
                    }`}
                    id='datalist'
                    {...props}
                >
                    {placeholder && (
                        <option value='' disabled>
                            {placeholder}
                        </option>
                    )}
                    {children}
                </datalist>
            </div>
        </div>
    )
}

export default FormDatalist
