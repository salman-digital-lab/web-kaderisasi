import React, { useState, useRef } from 'react'
import { DropdownIcon } from '@assets'

const FormDropdown = ({
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

    const handleInputType = (input) => {
        setData(
            options.filter((item) =>
                item.name.toLowerCase().includes(input.target.value)
            )
        )
    }

    const handleClick = (e, selected) => {
        inputRef.current.value = selected.name
        onChange(e)
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
                    className={`group w-full outline-none text-base focus:bg-red-100`}
                    type='text'
                    ref={inputRef}
                    name={name}
                    defaultValue={defaultName || ''}
                    onChange={handleInputType}
                    onClick={() => setIsOpen(true)}
                    {...props}
                />

                {isOpen ? (
                    <ul
                        className='absolute max-w-sm mt-10 ml-15 bg-white border-2 border-bmka-primary-blue rounded group-focus:bg-red-300'
                        onClick={() => setIsOpen(false)}
                    >
                        {data.length > 0
                            ? data.map((item) => {
                                  return (
                                      <button
                                          ref={itemRef}
                                          name={name}
                                          key={item.id}
                                          className='flex flex-col p-1 border-b-2 text-left outline-none text-sm bg-white hover:bg-blue-100 '
                                          type='button'
                                          onClick={(e) => handleClick(e, item)}
                                          value={item.id}
                                      >
                                          {item.name}
                                      </button>
                                  )
                              })
                            : null}
                    </ul>
                ) : null}
            </div>
        </div>
    )
}

export default FormDropdown
