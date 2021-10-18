import React from 'react'

import Box from './box'

const HomeModuleStatistics = () => {
    return (
        <div
            className='w-full max-w-5xl mx-auto flex justify-between border-2 rounded-xl bg-white'
            style={{
                // borderColor: '#8DBCDD',
                transform: 'translate(0%,-50%)',
                boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)',
            }}
        >
            <Box number='50' title='Kampus di seluruh Indonesia' />
            <Box number='1200' title='Kader dari kalangan mahasiswa' />
            <Box number='20' title='Provinsi di seluruh Indonesia' />
        </div>
    )
}

export default HomeModuleStatistics
