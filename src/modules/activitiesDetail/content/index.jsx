import React from 'react'

import { Button } from '@components'

const ActivitiesDetailModuleContent = ({ description }) => {
    return (
        <div className='w-full flex gap-4'>
            <div className='w-full'>
                <h3 className='font-bold'>Deskripsi</h3>
                {description ? (
                    <p>{description}</p>
                ) : (
                    <p className='text-center pt-6 text-gray-500'>
                        Belum ada deskripsi mengenai kegiatan ini.
                    </p>
                )}
            </div>
            <div className='w-full max-w-xs flex flex-col gap-4 text-center p-4 rounded shadow-level-1'>
                <p className='font-bold'>
                    Tertarik untuk mengikuti kegiatan ini ?
                </p>
                <p>
                    Klik tombol di bawah ini dan silakan untuk mengikuti proses
                    pendaftaran sesuai ketentuan yang ada.
                </p>
                <Button variant='primary'>Daftar Kegiatan</Button>
            </div>
        </div>
    )
}

export default ActivitiesDetailModuleContent
