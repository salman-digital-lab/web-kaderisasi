import React from 'react'

import { BMKAFullVerticalIcon } from '@assets'
import { Link, Button, Jumbotron } from '@components'

const RegenerationFlowModuleHeader = () => {
    return (
        <Jumbotron>
            <div className='flex items-center justify-between'>
                <div className='w-full max-w-lg flex flex-col gap-6'>
                    <h1 className='text-white'>Alur Kaderisasi</h1>
                    <p className='text-white'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Mollitia dignissimos necessitatibus, in nobis
                        optio iure pariatur ullam illo, quia velit nesciunt
                        illum. Maxime, sunt veniam iste placeat distinctio
                        dolores non.
                    </p>
                    <div>
                        <Link href='/activities'>
                            <Button variant='primary'>Cari Kegiatan</Button>
                        </Link>
                    </div>
                </div>
                <div className='w-56'>
                    <BMKAFullVerticalIcon />
                </div>
            </div>
        </Jumbotron>
    )
}

export default RegenerationFlowModuleHeader
