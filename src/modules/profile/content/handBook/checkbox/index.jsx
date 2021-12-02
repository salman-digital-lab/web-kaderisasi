import React from 'react'

const HandbookCheckbox = ({ id, name }) => {
    return (
        <div
            key={id}
            className='p-4 flex gap-6 items-center border-2 rounded bg-white cursor-pointer'
        >
            <input
                type='checkbox'
                id={`task-${id}`}
                name={`task-${id}`}
                className='cursor-pointer'
            />
            <label className='cursor-pointer' htmlFor={`task-${id}`}>
                {name}
            </label>
        </div>
    )
}

export default HandbookCheckbox
