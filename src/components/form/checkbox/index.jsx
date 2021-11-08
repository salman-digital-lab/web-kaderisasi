import React from 'react'

const FormCheckbox = ({ label, className, ...props }) => {
    return (
        <div>
            {label && (
                <p>
                    {label}
                    {props.required === true && (
                        <span style={{ color: 'red' }}> *</span>
                    )}
                </p>
            )}

            <input {...props} />

            <label className='ml-1' htmlFor={props.value}>
                {props.value}
            </label>
        </div>
    )
}

export default FormCheckbox
