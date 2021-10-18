import React from 'react'

const FormInput = ({ icon, ...props }) => {
    return (
        <div>
            {icon && icon}
            <input {...props} />
        </div>
    )
}

export default FormInput
