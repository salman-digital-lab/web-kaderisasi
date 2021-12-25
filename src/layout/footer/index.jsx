import React from 'react'

import { ComponentWrapper } from '@components'

import { InfoSection, AddressSection, ContactSection } from './section'

const Footer = () => {
    return (
        <footer className='py-10 bg-bmka-shade-dark-purple'>
            <ComponentWrapper>
                <div className='flex flex-col justify-between gap-6 md:flex-row md:gap-4'>
                    <InfoSection />
                    <div className='flex gap-10 flex-col sm:flex-row'>
                        <ContactSection />
                        <AddressSection />
                    </div>
                </div>
            </ComponentWrapper>
        </footer>
    )
}

export default Footer
