import React from 'react'

import { BMKAActivitiesIcon } from '@assets'
import { Button, Jumbotron } from '@components'

const ActivitiesModuleHeader = () => {
    return (
        <Jumbotron>
            <div className='flex justify-center md:justify-between'>
                <div className='flex items-center'>
                    <div className='max-w-xl flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-white text-center md:text-left'>
                                Ayo Daftar Kegiatan di
                            </h1>
                            <h1 className='text-white text-center md:text-left'>
                                Kaderisasi Salman ITB
                            </h1>
                        </div>
                        <p className='text-white text-center md:text-left'>
                            Kegiatan di kaderisasi salman merupakan kegiatan
                            yang diperuntukan untuk aktivis yang terdaftar
                            menjadi kader salman. Kegiatan meliputi kegiatan
                            kaderisasi, pelatihan, keasramaan dan lain-lain.
                        </p>
                        <div className='mx-auto md:mx-0'>
                            <Button variant='primary'>Cari Kegiatan</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-96 hidden md:block'>
                        <BMKAActivitiesIcon />
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

export default ActivitiesModuleHeader
