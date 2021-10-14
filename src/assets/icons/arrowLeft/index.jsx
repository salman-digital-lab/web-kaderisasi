import React from 'react'

const ArrowLeft = ({ className }) => {
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
                d='M15 19l-7-7 7-7'
            />
        </svg>
    )
}

export default ArrowLeft
