/* eslint-disable no-nested-ternary */
import React from 'react'
import { ComponentWrapper, Jumbotron, Link, Button } from '@components'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

const ActivitesRegister = ({ status, ...props }) => {
    const { enqueueSnackbar } = useSnackbar()

    let message = ''
    let linkTo = ''
    let messageButton = ''

    if (status === 401) {
        message = 'Silahkan login terlebih dahulu.'
        linkTo = '/login'
        messageButton = 'Login'
    } else if (status === 403) {
        message = 'Jenjangmu belum cukup untuk bisa mengikuti kegiatan ini.'
        linkTo = '/activities'
        messageButton = 'Kembali ke activity'
    } else if (status === 400) {
        message = 'Tanggal pendaftaran tidak sesuai'
        linkTo = '/activities'
        messageButton = 'Kembali ke activity'
    } else {
        message = 'Something went wrong'
        linkTo = '/'
        messageButton = 'Kembali ke home'
    }

    enqueueSnackbar(message, {
        variant: 'error',
    })

    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <Jumbotron>
                <h1 className='w-5/6 mx-auto md:w-full text-center text-white px-1 md:px-5 text-3xl md:text-6xl'>
                    {slug}
                </h1>
            </Jumbotron>
            <ComponentWrapper>
                <div className='w-full'>
                    {status === 401 || status === 403 || status === 400 ? (
                        <div className='w-3/4 md:w-1/3 mx-auto flex flex-col gap-6 text-center rounded-lg shadow-lg p-6 my-10'>
                            <h3 className='font-bold text-bmka-primary-blue'>
                                Oops!
                            </h3>
                            <p>{message}</p>
                            <div>
                                <Link href={linkTo}>
                                    <Button variant='secondary'>
                                        {messageButton}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <h1 className='mt-16'>test</h1>
                    )}
                </div>
            </ComponentWrapper>
        </>
    )
}

export default ActivitesRegister
