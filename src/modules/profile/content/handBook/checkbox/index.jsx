import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

const HandbookCheckbox = ({ id, name, value }) => {
    const checkboxRef = useRef()
    const [checkboxValue, setCheckboxValue] = useState(value)

    const checkboxOnClick = () => {
        setCheckboxValue(!checkboxValue)
    }

    return (
        <motion.button
            key={id}
            type='button'
            onClick={checkboxOnClick}
            whileTap={{ scale: 0.98 }}
            className={`p-4 flex gap-6 items-center border-2 rounded cursor-pointer ${
                checkboxValue ? 'bg-gray-200' : 'bg-white'
            }`}
        >
            <input
                type='checkbox'
                ref={checkboxRef}
                id={`task-${id}`}
                name={`task-${id}`}
                checked={checkboxValue}
                onClick={checkboxOnClick}
                className='cursor-pointer'
            />
            <p className={`${checkboxValue ? 'line-through' : ''}`}>{name}</p>
        </motion.button>
    )
}

export default HandbookCheckbox
