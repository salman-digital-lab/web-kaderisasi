import React from 'react'

import { Button } from '@components'

const HomeModuleStudentCare = () => {
    return (
        <div>
            <div className='flex items-center justify-between px-14 py-24 bg-bmka-accent-orange rounded-3xl'>
                <p className='text-3xl text-white font-extrabold'>
                    Ruang Curhat
                </p>
                <p className='text-white max-w-lg'>
                    Ruang Curhat adalah layanan pengajuan dan pendampingan
                    masalah untuk aktivis Salman ITB. Kamu akan ditemani
                    langsung oleh tim Kaderisasi Salman yang berlatar belakang
                    Psikologi dan Psikoterapi.
                </p>
            </div>
            <div
                className='mx-14 px-4 py-6 bg-white rounded-lg'
                style={{
                    transform: 'translate(0%,-50%)',
                    boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)',
                }}
            >
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>
                        Ayo menuju ruang curhat dan ceritakan masalahmu
                    </p>
                    <div>
                        <Button variant='secondary'>Lanjutkan</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeModuleStudentCare
