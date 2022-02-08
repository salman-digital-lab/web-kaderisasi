import React from 'react'

const FormScale = ({ label, className, ...props }) => {
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
            <div className='flex gap-2'>
                <input
                    spellCheck='false'
                    className={`w-full ${className ?? ''}`}
                    {...props}
                />
                <output id='scala'>{props.value}</output>
            </div>
        </div>
    )
}

export default FormScale
