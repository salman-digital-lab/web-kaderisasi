/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { ArrowLeftIcon, ArrowRightIcon } from '@assets'

const ActivitiesDetailModuleBanner = ({ images }) => {
    const [imagePointer, setImagePointer] = useState(0)

    const buttonClickHandler = (direction) => {
        if (direction === 'left') {
            const pointer = imagePointer > 0 ? imagePointer - 1 : imagePointer

            setImagePointer(pointer)
        } else if (direction === 'right') {
            const pointer =
                imagePointer < images.length - 1
                    ? imagePointer + 1
                    : imagePointer

            setImagePointer(pointer)
        }
    }

    return (
        <div className='w-full max-w-md flex mx-auto'>
            <div className='flex items-center'>
                <button
                    type='button'
                    onClick={() => buttonClickHandler('left')}
                    className='bg-bmka-accent-orange rounded'
                >
                    <ArrowLeftIcon className='w-12 text-white' />
                </button>
            </div>
            <AnimatePresence>
                <motion.img
                    alt='Banner'
                    className='w-full'
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    key={images[imagePointer]}
                    src={images[imagePointer]}
                />
            </AnimatePresence>
            <div className='flex items-center'>
                <button
                    type='button'
                    onClick={() => buttonClickHandler('right')}
                    className='bg-bmka-accent-orange rounded'
                >
                    <ArrowRightIcon className='w-12 text-white' />
                </button>
            </div>
        </div>
    )
}

export default ActivitiesDetailModuleBanner
