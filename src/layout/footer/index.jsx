import React from 'react'

import { ComponentWrapper } from '@components'

import { InfoSection, AddressSection, ContactSection } from './section'

const Footer = () => {
    return (
        <footer className='py-10 bg-bmka-shade-dark-purple'>
            <ComponentWrapper>
                <div className='flex justify-between'>
                    <InfoSection />
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
