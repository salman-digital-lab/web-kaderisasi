import React from 'react'

const FormTextArea = ({ label, className, ...props }) => {
    return (
        <div>
            {label && <p>{label}</p>}
            <div className='flex gap-2 items-center px-2 py-3 border-2 border-bmka-primary-blue rounded'>
                <textarea
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
