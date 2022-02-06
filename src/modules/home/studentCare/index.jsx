import React from 'react'

import { Button, Link } from '@components'

const HomeModuleStudentCare = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-between px-8 py-10 bg-bmka-accent-orange rounded-3xl md:px-14 md:py-24 md:flex-row'>
                <p className='text-3xl text-white font-extrabold'>
                    Ruang Curhat
                </p>
                <p className='text-white max-w-lg my-4 md:my-0'>
                    Ruang Curhat adalah layanan pengajuan dan pendampingan
                    masalah untuk aktivis Salman ITB. Kamu akan ditemani
                    langsung oleh tim Kaderisasi Salman yang berlatar belakang
                    Psikologi dan Psikoterapi.
                </p>
            </div>
            <div className='mx-14 px-4 py-6 bg-white rounded-lg transform -translate-y-10 shadow-level-1'>
                <div className='flex flex-col gap-4 items-center justify-between md:flex-row'>
                    <p className='font-bold text-center'>
                        Ayo menuju ruang curhat dan ceritakan masalahmu
                    </p>
                    <Link href='/student-care'>
                        <Button variant='secondary'>Lanjutkan</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeModuleStudentCare
