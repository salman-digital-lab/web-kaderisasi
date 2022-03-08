// eslint-disable-next-line react/no-danger

import React from 'react'
import { Button, Link } from '@components'
import { useRouter } from 'next/router'
import { sanitize } from '@utils'

import styles from './styles.module.css'

const ActivitiesDetailModuleContent = ({ description }) => {
    const router = useRouter()

    console.log(description)

    return (
        <div className='w-full flex flex-col md:flex-row gap-4 justify-center'>
            <div className='w-full'>
                <h2 className='mb-2 font-bold text-center md:text-left'>
                    Deskripsi
                </h2>
                {description ? (
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{
                            __html: sanitize(description),
                        }}
                    />
                ) : (
                    <p className='md:text-left text-center pt-6 text-gray-500'>
                        Belum ada deskripsi mengenai kegiatan ini.
                    </p>
                )}
            </div>
            <div
                style={{ height: 'min-content' }}
                className='w-full mt-12 md:mt-0 flex flex-col gap-4 text-center p-4 rounded shadow-level-1 md:mx-0 md:max-w-xs'
            >
                <p className='font-bold'>
                    Tertarik untuk mengikuti kegiatan ini ?
                </p>
                <p>
                    Klik tombol di bawah ini dan silakan untuk mengikuti proses
                    pendaftaran sesuai ketentuan yang ada.
                </p>
                <Link href={`/activities/register/${router.query.slug}`}>
                    <Button variant='primary'>Daftar Kegiatan</Button>
                </Link>
            </div>
        </div>
    )
}

export default ActivitiesDetailModuleContent
