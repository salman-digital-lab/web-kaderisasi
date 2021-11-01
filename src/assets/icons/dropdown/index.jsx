import React from 'react'

const Dropdown = ({ className }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            height='32'
            width='32'
            focusable='false'
            role='img'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            className={`StyledIconBase-ea9ulj-0 bWRyML  ${className ?? ''}`}
        >
            <title>ArrowDropDown icon</title>
            <path fill='none' d='M0 0h24v24H0V0z' />
            <path d='M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z' />
        </svg>
    )
}

export default Dropdown
