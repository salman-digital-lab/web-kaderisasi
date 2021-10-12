import React from 'react'

import { Link } from '@components'

import FooterText from '../../text'
import FooterTitle from '../../title'

const MenuSection = () => {
    return (
        <div>
            <FooterTitle>Menu</FooterTitle>
            <div className='mt-4 flex flex-col gap-4'>
                <Link href='/'>
                    <FooterText>Home</FooterText>
                </Link>
                <Link href='/activities'>
                    <FooterText>Kegiatan</FooterText>
                </Link>
                <Link href='/student-care'>
                    <FooterText>Ruang Curhat</FooterText>
                </Link>
                <Link href='/about-us'>
                    <FooterText>Tentang Kami</FooterText>
                </Link>
                <Link href='/register'>
                    <FooterText>Daftar</FooterText>
                </Link>
                <Link href='/login'>
                    <FooterText>Masuk</FooterText>
                </Link>
            </div>
        </div>
    )
}

export default MenuSection
