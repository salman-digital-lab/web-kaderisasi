import React from 'react'

import { Jumbotron } from '@components'
import { BMKAActivitiesIcon } from '@assets'

const ActivitiesModuleHeader = () => {
    return (
        <Jumbotron>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className='max-w-xl flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-white'>Ayo Daftar Kegiatan</h1>
                            <h1 className='text-white'>
                                Di Kaderisasi Salman ITB
                            </h1>
                        </div>
                        <p className='text-white'>
                            Kegiatan di kaderisasi salman merupakan kegiatan
                            yang diperuntukan untuk aktivis yang terdaftar
                            menjadi kader salman. Kegiatan meliputi kegiatan
                            kaderisasi, pelatihan, keasramaan dan lain-lain.
                        </p>
                    </div>
                </div>
                <div>
                    <div className='h-96'>
                        <BMKAActivitiesIcon />
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

export default ActivitiesModuleHeader
