import React from 'react'

import { BMKAFullIcon } from '@assets'

import FooterText from '../../text'
import FooterTitle from '../../title'

const info = () => {
    return (
        <div className='md:max-w-sm flex flex-col'>
            <FooterTitle>Platform Aktivis Salman ITB (BMKA)</FooterTitle>
            <div className='flex flex-col gap-4'>
                <div className='w-32'>
                    <BMKAFullIcon />
                </div>

                <FooterText>
                    Portal Aktivis Salman yang dikelola BMKA (Bidang
                    Kemahasiswaan, Kaderisasi dan Alumni) Salman yang berfungsi
                    sebagai pusat pendaftaran kegiatan di @kaderisasisalman.
                    Program pembinaan dalam rangka membentuk kader teladan untuk
                    membangun Indonesia.
                </FooterText>
            </div>
            <p className='mt-4 text-white text-xs font-bold'>
                Copyright BMKA Salman 2021
            </p>
        </div>
    )
}

export default info
