import axios from 'axios'
import { motion } from 'framer-motion'
import { useSnackbar } from 'notistack'
import React, { useRef, useState } from 'react'

const HandbookCheckbox = ({
    id,
    name,
    token,
    value,
    userChecklist,
    setUserChecklist,
}) => {
    const checkboxRef = useRef()
    const { enqueueSnackbar } = useSnackbar()
    const [checkboxValue, setCheckboxValue] = useState(value)

    const checkboxOnClick = async () => {
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        try {
            if (!checkboxValue) {
                await axios.post(
                    `${baseURL}/${baseURLVersion}/checklist/tick/${id}`,
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            } else {
                await axios.delete(
                    `${baseURL}/${baseURLVersion}/checklist/untick/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            }

            setUserChecklist([
                ...userChecklist,
                {
                    id,
                    checklist_name: name,
                },
            ])

            setCheckboxValue(!checkboxValue)
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
                onChange={checkboxOnClick}
                className='cursor-pointer'
            />
            <p className={`${checkboxValue ? 'line-through' : ''}`}>{name}</p>
        </motion.button>
    )
}

export default HandbookCheckbox
