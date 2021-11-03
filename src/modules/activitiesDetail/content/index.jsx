import React from 'react'
import { useRouter } from 'next/router'

import { Button } from '@components'

const ActivitiesDetailModuleContent = ({ description }) => {
    const router = useRouter()
    const register = () => {
        router.push(`/activities/register/${router.query.slug}`)
    }

    return (
        <div className='w-full flex flex-col md:flex-row gap-4 justify-center'>
            <div className='w-full'>
                <h2 className='font-bold md:text-left text-center'>
                    Deskripsi
                </h2>
                {description ? (
                    <p>{description}</p>
                ) : (
                    <p className='md:text-left text-center pt-6 text-gray-500'>
                        Belum ada deskripsi mengenai kegiatan ini.
                    </p>
                )}
            </div>
            <div className='w-full max-w-xs mt-12 md:mt-0 flex flex-col gap-4 text-center p-4 rounded shadow-level-1 mx-auto md:mx-0'>
                <p className='font-bold'>
                    Tertarik untuk mengikuti kegiatan ini ?
                </p>
                <p>
                    Klik tombol di bawah ini dan silakan untuk mengikuti proses
                    pendaftaran sesuai ketentuan yang ada.
                </p>
                <Button onClick={register} variant='primary'>
                    Daftar Kegiatan
                </Button>
            </div>
        </div>
    )
}

export default ActivitiesDetailModuleContent
