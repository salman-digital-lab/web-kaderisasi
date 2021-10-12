import React from 'react'

const FooterText = ({ children, className }) => {
    return (
        <p
            style={{ opacity: '0.7' }}
            className={`text-white ${className ?? ''}`}
        >
            {children}
        </p>
    )
}

export default FooterText
