import React, { useState } from 'react'

import { Button } from '@components'
import { SearchIcon } from '@assets'

const ActivitiesModuleSearch = ({ activityCategoryData }) => {
    const [currentCategory, setCurrentCategory] = useState('')

    const categoryButtonHandler = (category) => {
        setCurrentCategory(category)
    }

    return (
        <div>
            <form
                className='w-full max-w-4xl mx-auto px-8 py-6 rounded-lg flex items-center gap-4 bg-white'
                style={{
                    transform: 'translate(0%,-50%)',
                    boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)',
                }}
            >
                <SearchIcon className='w-6' />
                <input
                    type='text'
                    spellCheck='false'
                    className='w-full outline-none'
                    placeholder='Ketik nama kegiatan disini'
                />
                <Button type='submit' variant='secondary' className=' px-8'>
                    Cari
                </Button>
            </form>
            <div className='w-full flex justify-center gap-2 pb-6'>
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
