import React from 'react'

import { InstagramIcon, PhoneIcon, MailIcon } from '@assets'

import FooterText from '../../text'
import FooterTitle from '../../title'

const ContactSection = () => {
    return (
        <div>
            <FooterTitle>Kontak</FooterTitle>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <InstagramIcon className='w-6 h-6 text-white' />
                    <FooterText>@kaderisasisalman</FooterText>
                </div>
                <div className='flex items-center gap-4'>
                    <MailIcon className='w-6 h-6 text-white' />
                    <FooterText>kaderisasi@salmanitb.com</FooterText>
                </div>
                <div className='flex items-center gap-4'>
                    <PhoneIcon className='w-6 h-6 text-white' />
                    <FooterText>+62 821 1128 6037</FooterText>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
