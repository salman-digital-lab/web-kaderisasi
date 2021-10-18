import React from 'react'

const ComponentWrapper = ({ children, className }) => {
    return (
        <div className={`w-full px-6 max-w-7xl mx-auto ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default ComponentWrapper
