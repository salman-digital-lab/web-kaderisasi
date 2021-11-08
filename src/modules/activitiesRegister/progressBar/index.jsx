/* eslint-disable react/no-array-index-key */
import React from 'react'

/*
 * Component to show progress bar based on current step
 */

const ProgressBar = (props) => {
    const items = []

    for (let index = 1; index <= props.maxStep; index += 1) {
        if (props.currentStep === index) {
            items.push(
                'w-4 h-4 md:w-5 md:h-5 rounded-full border-2 md:border-4 border-bmka-accent-orange bg-bmka-shade-white'
            )
        } else {
            items.push(
                `w-4 h-4  md:w-5 md:h-5 rounded-full bg-bmka-accent-orange  ${
                    props.currentStep > index ? 'opacity-1' : 'opacity-50'
                }`
            )
        }
        if (index < props.maxStep) {
            items.push(
                `w-5 md:w-10 h-0.5 bg-bmka-accent-orange ${
                    props.currentStep > index ? 'opacity-1' : 'opacity-50'
                }`
            )
        }
    }

    return (
        <div className='flex items-center mx-auto gap-0'>
            {items.map((item, index) => (
                <div className={item} key={index} />
            ))}
        </div>
    )
}

export default ProgressBar
