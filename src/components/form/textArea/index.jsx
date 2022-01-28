import React from 'react'

const FormTextArea = ({ label, required, className, ...props }) => {
    return (
        <div>
            {label && (
                <p>
                    {label}
                    {required === true && (
                        <span style={{ color: 'red' }}> *</span>
                    )}
                </p>
            )}
            <div className='flex gap-2 items-center px-2 py-3 border-2 border-bmka-primary-blue rounded'>
                <textarea
                    required={required}
                    className={`w-full outline-none resize-none ${
                        className ?? ''
                    }`}
                    {...props}
                />
            </div>
        </div>
    )
}

export default FormTextArea
