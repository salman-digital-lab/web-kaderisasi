import React from 'react'

import { BMKAFullIcon } from '@assets'
import { ComponentWrapper } from '@components'

import FooterText from './text'
import FooterTitle from './title'
import { AddressSection, ContactSection } from './section'

const Footer = () => {
    return (
        <footer className='py-10 bg-bmka-shade-dark-purple'>
            <ComponentWrapper>
                <div className='flex justify-between'>
                    <div className='max-w-sm flex flex-col gap-4'>
                        <FooterTitle>
                            Platform Aktivis Salman ITB (BMKA)
                        </FooterTitle>
                        <div className='w-32'>
                            <BMKAFullIcon />
                        </div>
                        <FooterText>
                            Portal Aktivis Salman yang dikelola BMKA (Bidang
                            Kemahasiswaan, Kaderisasi dan Alumni) Salman yang
                            berfungsi sebagai pusat pendaftaran kegiatan di
                            @kaderisasisalman. Program pembinaan dalam rangka
                            membentuk kader teladan untuk membangun Indonesia.
                        </FooterText>
                        <p className='mt-4 text-white text-xs font-bold'>
                            Copyright BMKA Salman 2021
                        </p>
                    </div>
                    <div className='flex gap-10'>
                        <ContactSection />
                        <AddressSection />
                    </div>
                </div>
            </ComponentWrapper>
        </footer>
    )
}

export default Footer
