import React from 'react'

const FormSelect = ({ label, className, children, ...props }) => {
    return (
        <div>
            {label && <p>{label}</p>}
            <div className='flex gap-2 items-center px-2 py-3 border-2 border-bmka-primary-blue rounded'>
                <select
                    className={`w-full outline-none ${className ?? ''}`}
                    {...props}
                >
                    {children}
                </select>
            </div>
        </div>
    )
}

export default FormSelect
