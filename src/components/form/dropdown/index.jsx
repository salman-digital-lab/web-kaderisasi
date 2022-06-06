import React from 'react'
import Downshift from 'downshift'

const FormDropdown = ({
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
    options,
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
                } flex flex-col gap-2 items-center px-2 py-3 border-2 border-bmka-primary-blue rounded`}
            >
                <input
                    type='text'
                    className='outline-none text-base bg-blue-100 '
                    name={name}
                    defaultValue={campusName || ''}
                    onChange={onChange}
                />
                <ul className='absolute max-w-sm mt-10 ml-20 bg-white border-2 border-bmka-primary-blue rounded'>
                    {options.map((item) => {
                        return (
                            <button
                                key={item.id}
                                className=' border-b-2 text-left outline-none text-sm bg-white hover:bg-blue-100 '
                                type='button'
                            >
                                {item.name}
                            </button>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FormDropdown
