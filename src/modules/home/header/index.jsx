import React from 'react'

import { BMKAWelcome } from '@assets'
import { Link, Button, Jumbotron } from '@components'

const Header = () => {
    return (
        <Jumbotron>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className='max-w-xl flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-white'>Selamat Datang</h1>
                            <h1 className='text-white'>
                                Di Kaderisasi Salman ITB
                            </h1>
                        </div>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Eu nec, in faucibus mi mauris at eros nunc
                            porta. Odio lobortis etiam.
                        </p>
                        <div className='flex items-center gap-6'>
                            <div>
                                <Link href='/about-us'>
                                    <Button type='button' variant='primary'>
                                        Tentang BMKA
                                    </Button>
                                </Link>
                            </div>
                            <div
                                style={{ width: '2px' }}
                                className='h-16 bg-white'
                            />
                            <div>
                                <Link href='/regeneration-flow'>
                                    <Button type='button' variant='secondary'>
                                        Alur Kaderisasi
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-96'>
                        <BMKAWelcome />
                    </div>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Header
