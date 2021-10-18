import React from 'react'

import { SearchIcon } from '@assets'
import { Button } from '@components'

const ActivitiesModuleSearch = () => {
    return (
        <form
            className='w-full max-w-4xl mx-auto px-8 py-6 rounded-lg relative flex items-center gap-4 bg-white'
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
            <Button
                type='submit'
                textClassName='text-white font-bold'
                className='bg-bmka-primary-blue rounded-lg px-8'
            >
                Cari
            </Button>
        </form>
    )
}

export default ActivitiesModuleSearch
