import React from 'react'

import { BMKAWelcomeIcon } from '@assets'
import { Link, Button, Jumbotron } from '@components'

const HomeModuleHeader = () => {
    return (
        <Jumbotron>
            <div className='mb-16 flex justify-center md:justify-between'>
                <div className='flex items-center'>
                    <div className='max-w-xl flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-white text-center leading-tight md:text-left'>
                                Selamat Datang di Kaderisasi Salman ITB
                            </h1>
                        </div>
                        <p className='text-white text-center md:text-left'>
                            Portal Aktivis Salman yang dikelola BMKA (Bidang
                            Mahasiswa, Kaderisasi dan Alumni) Salman yang
                            berfungsi sebagai pusat pendaftaran kegiatan di{' '}
                            <span className='font-bold underline'>
                                <Link
                                    href='https://www.instagram.com/kaderisasisalman/'
                                    external
                                >
                                    @kaderisasisalman
                                </Link>
                            </span>
                            . Program pembinaan dalam rangka membentuk kader
                            teladan untuk membangun Indonesia.
                        </p>
                        <div className='flex items-center gap-6 mx-auto md:mx-0'>
                            <div>
                                <Link href='/about-us'>
                                    <Button type='button' variant='primary'>
                                        Tentang BMKA
                                    </Button>
                                </Link>
                            </div>
                            <div
                                style={{ width: '2px' }}
                                className='h-16 bg-white'
                            />
                            <div>
                                <Link href='/regeneration-flow'>
                                    <Button
                                        type='button'
                                        className='border-2 border-white'
                                        textClassName='text-white font-bold'
                                    >
                                        Alur Kaderisasi
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='h-96'>
                        <BMKAWelcomeIcon />
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

export default HomeModuleHeader
