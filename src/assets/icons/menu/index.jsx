import React from 'react'

const Menu = ({ className }) => {
    return (
        <svg
            fill='none'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={`stroke-current ${className ?? ''}`}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
            />
        </svg>
    )
}

export default Menu
