import React from 'react'

const ArrowRight = ({ className }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            className={`stroke-current ${className ?? ''}`}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
            />
        </svg>
    )
}

export default ArrowRight
