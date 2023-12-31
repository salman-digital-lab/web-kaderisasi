import React from 'react'

const UserIcon = ({ className }) => {
    return (
        <svg
            fill='none'
            viewBox='0 0 20 20'
            className={`${className ?? ''}`}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M6.25 5.41675C6.25 7.48425 7.9325 9.16675 10 9.16675C12.0675 9.16675 13.75 7.48425 13.75 5.41675C13.75 3.34925 12.0675 1.66675 10 1.66675C7.9325 1.66675 6.25 3.34925 6.25 5.41675ZM16.6667 17.5001H17.5V16.6667C17.5 13.4509 14.8825 10.8334 11.6667 10.8334H8.33333C5.11667 10.8334 2.5 13.4509 2.5 16.6667V17.5001H16.6667Z'
                fill='#9F9F9F'
            />
        </svg>
    )
}

export default UserIcon
