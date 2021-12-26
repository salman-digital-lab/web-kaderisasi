import React from 'react'

const FormInput = ({ label, className, required, fullWidth, ...props }) => {
    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <p>
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
                    spellCheck='false'
                    className={`w-full outline-none text-base ${
                        className ?? ''
                    }`}
                    {...props}
                />
            </div>
        </div>
    )
}

export default FormInput
