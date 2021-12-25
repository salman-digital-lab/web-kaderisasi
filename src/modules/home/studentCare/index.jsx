import React from 'react'

import { Button } from '@components'

const HomeModuleStudentCare = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center justify-between px-14 py-10 md:py-24 bg-bmka-accent-orange rounded-3xl'>
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
            <div
                className='mx-14 px-4 py-6 bg-white rounded-lg transform -translate-y-10 shadow-level-1'
                style={
                    {
                        // transform: 'translate(0%,-50%)',
                        // boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.15)',
                    }
                }
            >
                <div className='flex flex-col gap-4 items-center justify-between md:flex-row'>
                    <p className='font-bold text-center'>
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
