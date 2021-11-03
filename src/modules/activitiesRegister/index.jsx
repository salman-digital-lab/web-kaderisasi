import React from 'react'
import { ComponentWrapper, Jumbotron, Link, Button } from '@components'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

const ActivitesRegister = ({ status, message, ...props }) => {
    const { enqueueSnackbar } = useSnackbar()
    if (status === 'FAILED') {
        enqueueSnackbar(message, {
            variant: 'error',
        })
    }

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
                    {status === 'FAILED' ? (
                        <div className='w-3/4 md:w-1/3 mx-auto flex flex-col gap-6 text-center rounded-lg shadow-lg p-6 my-10'>
                            <h3 className='font-bold text-bmka-primary-blue'>
                                Oops!
                            </h3>
                            <p>{message}</p>
                            <div>
                                <Link href='/activities'>
                                    <Button variant='secondary'>
                                        Kembali ke activity
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
