import React from 'react'

import { Jumbotron } from '@components'

import AboutUsModuleIllustration from '../illustration'

const AboutUsModuleHeader = () => {
    return (
        <div>
            <Jumbotron>
                <div className='flex flex-col justify-between items-center gap-12 md:flex-row'>
                    <div className='w-full max-w-lg flex flex-col gap-6'>
                        <h1 className='text-white leading-snug'>
                            Sebenarnya, apasih BMKA Salman ITB itu ?
                        </h1>
                        <p className='text-white'>
                            Yuk, lebih mengenal tentang kami (BMKA Salman ITB).
                            Simak baik-baik deskripsi dan kegiatan tentang kami
                            di bawah ini yaa.{' '}
                        </p>
                    </div>
                    <div className='w-full justify-end hidden md:flex'>
                        <div className='w-full max-w-xs'>
                            <AboutUsModuleIllustration />
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )
}

export default AboutUsModuleHeader
