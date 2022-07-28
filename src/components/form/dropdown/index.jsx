import React, { useState, useRef } from 'react'
import { DropdownIcon } from '@assets'

const FormSearchableDropdown = ({
    label,
    children,
    required,
    className,
    fullWidth,
    placeholder,
    defaultValue,
    onChange,
    name,
    defaultName,
    options,
    ...props
}) => {
    const inputRef = useRef(null)
    const itemRef = useRef(null)
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const handleInputType = (input) => {
        let filteredData = options.filter((item) =>
            item.name.toLowerCase().includes(input.target.value.toLowerCase())
        )
        if (filteredData.length === 0) {
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
        setIsOpen(true)
        setData(filteredData)
    }

    const handleClick = (e, selected) => {
        inputRef.current.value = selected.name
        onChange(e)
    }

    const handleBlur = (input) => {
        if (isOpen) {
            setTimeout(() => {
                setIsOpen(false)
            }, 100)
        }
        if(isEmpty){
            input.target.value=""
        }
    }

    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <p className='font-semibold'>
                    {label}
                    {required === true && (
                        <span style={{ color: 'red' }}> *</span>
                    )}
                </p>
            )}
            <div
                className={`${
                    fullWidth ? 'w-full' : ''
                } flex flex-col gap-2 items-center px-2 py-3 border-2 border-bmka-primary-blue rounded`}
            >
                <input
                    className={`group w-full outline-none text-base`}
                    type='text'
                    ref={inputRef}
                    name={name}
                    defaultValue={defaultName || ''}
                    placeholder={placeholder}
                    onChange={handleInputType}
                    onClick={() => (inputRef.current.value = '')}
                    onBlur={handleBlur}
                    {...props}
                />
                {isOpen ? (
                    <ul className='absolute w-60 max-h-80 overflow-y-auto mt-10 ml-15 bg-white border-2 border-bmka-primary-blue rounded group-focus:bg-red-300'>
                        {!isEmpty ? (
                            data.map((item) => {
                                return (
                                    <li className='z-50 border-b-2 hover:bg-bmka-primary-blue hover:text-white'>
                                        <button
                                            ref={itemRef}
                                            name={name}
                                            key={item.id}
                                            className='flex flex-col p-1 text-left outline-none text-sm w-full hover:cursor-pointer'
                                            type='button'
                                            onClick={(e) =>
                                                handleClick(e, item)
                                            }
                                            value={item.id}
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                )
                            })
                        ) : (
                            <button
                                className='flex flex-col overflow-auto p-1 border-b-2 text-left outline-none text-sm text-red-600'
                                type='button'
                                disabled
                            >
                                No results
                            </button>
                        )}
                    </ul>
                ) : null}
            </div>
        </div>
    )
}

export default FormSearchableDropdown
