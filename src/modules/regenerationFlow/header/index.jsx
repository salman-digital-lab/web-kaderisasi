import React from 'react'

import { BMKAFullVerticalIcon } from '@assets'
import { Link, Button, Jumbotron } from '@components'

const RegenerationFlowModuleHeader = () => {
    return (
        <Jumbotron>
            <div className='flex items-center justify-between'>
                <div className='w-full max-w-lg flex flex-col gap-6'>
                    <h1 className='text-white'>Alur Kaderisasi</h1>
                    <p className='text-white'>
                        Demi melahirkan kader teladan pelopor peradaban Islam,
                        Masjid Salman ITB telah merancang alur kaderisasi yang
                        sistematis. Dimulai dari memahami tentang Islam yang
                        sesungguhnya, belajar bagaimana berijtihad teknologi,
                        hingga menjadi seorang pemberadab akan kamu dapatkan
                        jika mengikuti seluruh rangkaian kaderisasi Masjid
                        Salman ITB.
                    </p>
                    <div>
                        <Link href='/activities'>
                            <Button variant='primary'>Cari Kegiatan</Button>
                        </Link>
                    </div>
                </div>
                <div className='w-56'>
                    <BMKAFullVerticalIcon />
                </div>
            </div>
        </Jumbotron>
    )
}

export default RegenerationFlowModuleHeader
