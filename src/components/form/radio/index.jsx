import React from 'react'

const FormRadio = ({ label, className, ...props }) => {
    return (
        <div>
            {label && (
                <p className='font-semibold'>
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

export default FormRadio
