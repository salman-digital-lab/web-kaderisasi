/* eslint-disable react/no-array-index-key */
import React from 'react'

/*
 * Component to show progress bar based on current step
 */

const ProgressBar = (props) => {
    const items = []

    for (let index = 1; index <= props.maxStep; index += 1) {
        if (props.currentStep === index) {
            items.push('activeIndicator')
        } else {
            items.push('defaultIndicator')
        }
        if (index < props.maxStep) {
            items.push('defaultLine')
        }
    }

    return (
        <div className='progressBar'>
            {items.map((item, index) => (
                <div className={item} key={index} />
            ))}
        </div>
    )
}

export default ProgressBar
