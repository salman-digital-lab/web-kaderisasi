import React from 'react'

import Box from './box'

const HomeModuleStatistics = () => {
    return (
        <div className='w-full max-w-5xl mx-auto flex flex-col justify-between border-2 rounded-xl bg-white transform -translate-y-16 shadow-level-1 md:flex-row md:-translate-y-1/2'>
            <Box number='50' title='Kampus di seluruh Indonesia' />
            <Box number='1200' title='Kader dari kalangan mahasiswa' />
            <Box number='20' title='Provinsi di seluruh Indonesia' />
        </div>
    )
}

export default HomeModuleStatistics
