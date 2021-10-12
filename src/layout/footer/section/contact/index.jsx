import React from 'react'

import { LineIcon, InstagramIcon, PhoneIcon, MailIcon } from '@assets'

import FooterText from '../../text'
import FooterTitle from '../../title'

const ContactSection = () => {
    return (
        <div>
            <FooterTitle>Kontak</FooterTitle>
            <div className='mt-4 flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <LineIcon className='w-6 h-6 text-white' />
                    <FooterText>@bmkasalman</FooterText>
                </div>
                <div className='flex items-center gap-4'>
                    <InstagramIcon className='w-6 h-6 text-white' />
                    <FooterText>@bmkasalman</FooterText>
                </div>
                <div className='flex items-center gap-4'>
                    <MailIcon className='w-6 h-6 text-white' />
                    <FooterText>kaderisasi@salmanitb.com</FooterText>
                </div>
                <div className='flex items-center gap-4'>
                    <PhoneIcon className='w-6 h-6 text-white' />
                    <FooterText>+62 815 4682 0364</FooterText>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
