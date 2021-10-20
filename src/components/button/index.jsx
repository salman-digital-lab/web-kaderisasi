/* eslint-disable react/button-has-type */

import React from 'react'

const Button = ({ children, variant, className, textClassName, ...props }) => {
    const defaultClassName = `py-2 px-4 rounded ${className ?? ''}`

    switch (variant) {
        case 'primary':
            return (
                <button
                    className={`bg-bmka-accent-orange border-2 border-bmka-accent-orange rounded ${defaultClassName}`}
                    {...props}
                >
                    <p className='text-white font-bold'>{children}</p>
                </button>
            )

        case 'secondary':
            return (
                <button
                    className={`bg-bmka-primary-blue border-2 border-bmka-primary-blue rounded ${defaultClassName}`}
                    {...props}
                >
                    <p className='text-white font-bold'>{children}</p>
                </button>
            )

        default:
            return (
                <button className={defaultClassName} {...props}>
                    <p className={textClassName}>{children}</p>
                </button>
            )
    }
}

export default Button