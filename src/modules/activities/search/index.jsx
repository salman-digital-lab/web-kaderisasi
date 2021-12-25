/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios'
import React, { useRef, useEffect, forwardRef } from 'react'

import { SearchIcon } from '@assets'
import { Button, FormSelect } from '@components'

const ActivitiesModuleSearch = forwardRef(
    (
        {
            searchKeyword,
            currentCategory,
            setSearchKeyword,
            setCurrentCategory,
            activityCategoryData,
            setCurrentActivityData,
        },
        ref
    ) => {
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

        const categorySelectHandler = (e) => {
            const { value } = e.target

            setCurrentCategory(value)
        }

        const searchInputHandler = (e) => {
            const { value } = e.target

            setSearchKeyword(value)
        }

        const formSubmitHandler = (e) => {
            e.preventDefault()

            updateActivityData()
        }

        useEffect(() => {
            if (firstRender.current) {
                firstRender.current = false

                return
            }

            updateActivityData()
        }, [currentCategory])

        return (
            <div ref={ref}>
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

                <div className='w-full md:hidden my-4'>
                    <FormSelect
                        className='w-full'
                        onChange={categorySelectHandler}
                    >
                        <option value=''>Semua</option>
                        {activityCategoryData.map((item) => {
                            return (
                                <option key={item.id} value={item.name}>
                                    {item.name}
                                </option>
                            )
                        })}
                    </FormSelect>
                </div>

                <div className='w-full flex-row flex-wrap justify-center gap-2 pb-6 hidden md:flex'>
                    <Button
                        onClick={() => categoryButtonHandler('')}
                        variant={
                            currentCategory === '' ? 'primary' : 'secondary'
                        }
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
)

export default ActivitiesModuleSearch
