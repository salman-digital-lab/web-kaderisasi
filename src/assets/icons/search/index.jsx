import React from 'react'

const SearchIcon = ({ className }) => {
    return (
        <svg
            fill='none'
            viewBox='0 0 26 26'
            className={`${className ?? ''}`}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M25.25 25.25L19.6425 19.6325L25.25 25.25ZM22.75 12.125C22.75 14.9429 21.6306 17.6454 19.638 19.638C17.6454 21.6306 14.9429 22.75 12.125 22.75C9.30707 22.75 6.60456 21.6306 4.61199 19.638C2.61942 17.6454 1.5 14.9429 1.5 12.125C1.5 9.30707 2.61942 6.60456 4.61199 4.61199C6.60456 2.61942 9.30707 1.5 12.125 1.5C14.9429 1.5 17.6454 2.61942 19.638 4.61199C21.6306 6.60456 22.75 9.30707 22.75 12.125V12.125Z'
                stroke='#9F9F9F'
                strokeWidth='1.91667'
                strokeLinecap='round'
            />
        </svg>
    )
}

export default SearchIcon
