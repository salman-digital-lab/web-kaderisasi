import axios from 'axios'
import { motion } from 'framer-motion'
import { useSnackbar } from 'notistack'
import React, { useRef, useState } from 'react'

const HandbookCheckbox = ({ id, name, token, value }) => {
    const checkboxRef = useRef()
    const { enqueueSnackbar } = useSnackbar()
    const [checkboxValue, setCheckboxValue] = useState(value)

    const checkboxOnClick = () => {
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        setCheckboxValue(!checkboxValue)

        try {
            if (checkboxValue) {
                axios.post(
                    `${baseURL}/${baseURLVersion}/checklist/tick/${id}`,
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            } else {
                axios.delete(
                    `${baseURL}/${baseURLVersion}/checklist/untick/${id}`,
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            }
        } catch {
            enqueueSnackbar('Failed update task', { variant: 'error' })
        }
    }

    return (
        <motion.button
            key={id}
            type='button'
            onClick={checkboxOnClick}
            whileTap={{ scale: 0.98 }}
            className={`p-4 flex gap-6 items-center border-2 rounded cursor-pointer transition-all ${
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
