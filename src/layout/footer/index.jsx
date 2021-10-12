import React from 'react'

import { BMKAFullIcon } from '@assets'
import { ComponentWrapper } from '@components'

import FooterText from './text'
import { MenuSection, AddressSection, ContactSection } from './section'

const Footer = () => {
    return (
        <footer className='py-10 bg-bmka-shade-dark-purple'>
            <ComponentWrapper>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-32'>
                            <BMKAFullIcon />
                        </div>
                        <FooterText>Copyright BMKA Salman 2021</FooterText>
                    </div>
                    <div className='flex gap-6'>
                        <MenuSection />
                        <ContactSection />
                        <AddressSection />
                    </div>
                </div>
            </ComponentWrapper>
        </footer>
    )
}

export default Footer
