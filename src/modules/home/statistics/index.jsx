import React from 'react'

import Box from './box'

const Statistics = () => {
    return (
        <div
            className='flex justify-between border-2 relative -top-1/4 rounded-xl'
            style={{
                borderColor: '#8DBCDD',
                backgroundColor: '#F7F5F5',
                transform: 'translate(0%,-50%)',
            }}
        >
            <Box number='50' title='Kampus di seluruh Indonesia' />
            <Box number='1200' title='Kader dari kalangan mahasiswa' />
            <Box number='20' title='Provinsi di seluruh Indonesia' />
        </div>
    )
}

export default Statistics
