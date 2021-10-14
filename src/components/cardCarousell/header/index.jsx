import React from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '@assets'

const Header = ({ title, nextHandler, previousHandler }) => {
    return (
        <div className='flex items-center justify-between'>
            <h2 className='font-bold'>{title}</h2>
            <div className='flex gap-4'>
                <button
                    type='button'
                    className='border-2 border-bmka-primary-blue rounded p-2'
                    onClick={nextHandler}
                >
                    <ArrowLeftIcon className='w-6 rounded text-bmka-primary-blue' />
                </button>
                <button
                    type='button'
                    className='border-2 border-bmka-primary-blue rounded p-2'
                    onClick={previousHandler}
                >
                    <ArrowRightIcon className='w-6 rounded text-bmka-primary-blue' />
                </button>
            </div>
        </div>
    )
}

export default Header
