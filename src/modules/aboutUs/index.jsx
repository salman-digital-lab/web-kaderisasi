import React from 'react'

import { Link, Button, ComponentWrapper } from '@components'

import AboutUsModuleHeader from './header'
import AboutUsModuleContent from './content'

const AboutUsModule = () => {
    return (
        <div>
            <AboutUsModuleHeader />
            <ComponentWrapper>
                <div className='w-full max-w-3xl mx-auto text-center flex flex-col gap-12 py-12'>
                    <div>
                        <p>
                            <b>
                                BMKA (Bidang Mahasiswa, Kaderisasi dan
                                Alumni) Salman ITB{' '}
                            </b>{' '}
                            adalah bidang yang ada di bawah YPM Salman ITB yang
                            menjadi pusat pendaftaran kegiatan serta pembinaan
                            para aktivis salman dalam rangka membentuk kader
                            teladan untuk membangun Indonesia.{' '}
                        </p>
                    </div>
                    <div>
                        <AboutUsModuleContent />
                    </div>
                    <div className='text-center'>
                        <p className='font-bold'>
                            Pokoknya lengkap deh, masa - masa mahasiswa kita gak
                            akan sempurna kalau belum jadi Aktivis Salman ITB!{' '}
                            <span className='text-bmka-primary-blue'>
                                #naikLevel
                            </span>{' '}
                            <span className='text-bmka-primary-blue'>
                                {' '}
                                #bangunIndonesia
                            </span>
                        </p>
                    </div>
                    <div className='text-center'>
                        <Link href='/regeneration-flow'>
                            <Button variant='primary'>Alur Kaderisasi</Button>
                        </Link>
                    </div>
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default AboutUsModule
