import React from 'react'

const Box = ({ number, title }) => {
    return (
        <div className='text-center p-8'>
            <p className='text-3xl text-bmka-accent-orange font-extrabold'>
                {number}
            </p>
            <p>{title}</p>
        </div>
    )
}

export default Box
