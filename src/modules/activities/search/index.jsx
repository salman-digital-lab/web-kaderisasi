/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios'
import React, { useRef, useEffect, useState } from 'react'

import { Button } from '@components'
import { SearchIcon, DropdownIcon } from '@assets'

const ActivitiesModuleSearch = ({
    searchKeyword,
    currentCategory,
    setSearchKeyword,
    setCurrentCategory,
    activityCategoryData,
    setCurrentActivityData,
}) => {
    const [active, setActive] = useState({ active: true })
    const firstRender = useRef(true)

    const updateActivityData = async () => {
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        const response = await axios.get(
            `${baseURL}/${baseURLVersion}/activity?category=${currentCategory}&keyword=${searchKeyword}`
        )

        const { data } = response.data.data

        setCurrentActivityData(data)
    }

    const categoryButtonHandler = (category) => {
        setCurrentCategory(category)
    }

    const searchInputHandler = (e) => {
        const { value } = e.target

        setSearchKeyword(value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()

        updateActivityData()
    }

    const toggleFilter = (evt) => {
        evt.preventDefault()
        setActive(!active)
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false

            return
        }

        updateActivityData()
    }, [currentCategory])

    return (
        <div>
            <form
                onSubmit={formSubmitHandler}
                className='w-full md:max-w-4xl mx-auto px-8 py-6 rounded-lg flex items-center gap-4 bg-white'
                style={{
                    transform: 'translate(0%,-50%)',
                    boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)',
                }}
            >
                <SearchIcon className='w-6' />
                <input
                    type='text'
                    spellCheck='false'
                    value={searchKeyword}
                    onChange={searchInputHandler}
                    className='w-full outline-none'
                    placeholder='Ketik nama kegiatan disini'
                />
                <Button type='submit' variant='secondary' className=' px-8'>
                    Cari
                </Button>
            </form>
            <div className='w-full flex justify-center md:hidden my-4'>
                <Button
                    variant='primary'
                    className='w-full py-1'
                    onClick={(evt) => toggleFilter(evt)}
                >
                    <div className='flex justify-center items-center'>
                        Kategori <DropdownIcon />
                    </div>
                </Button>
            </div>

            <div
                className={`w-full flex flex-col md:flex-row justify-center gap-2 pb-6 ${
                    active ? '' : 'hidden'
                }`}
            >
                <Button
                    onClick={() => categoryButtonHandler('')}
                    variant={currentCategory === '' ? 'primary' : 'secondary'}
                >
                    Semua
                </Button>
                {activityCategoryData.map((item) => {
                    return (
                        <Button
                            key={item.id}
                            onClick={() => categoryButtonHandler(item.name)}
                            variant={
                                currentCategory === item.name
                                    ? 'primary'
                                    : 'secondary'
                            }
                        >
                            {item.name}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default ActivitiesModuleSearch
