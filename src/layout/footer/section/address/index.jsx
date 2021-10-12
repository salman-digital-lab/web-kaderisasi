import React from 'react'

import FooterText from '../../text'
import FooterTitle from '../../title'

const AddressSection = () => {
    return (
        <div>
            <FooterTitle>Alamat</FooterTitle>
            <div className='max-w-xs mt-4'>
                <FooterText>
                    Jl. Ganesa No.7, Lb. Siliwangi, Kecamatan Coblong, Kota
                    Bandung, Jawa Barat 40132
                </FooterText>
            </div>
        </div>
    )
}

export default AddressSection
