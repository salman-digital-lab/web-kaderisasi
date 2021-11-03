/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Router from 'next/router'
import { Button } from '@components'

/**
 * Function to redirect user to Home after succes registration
 */
const goHome = () => {
    Router.push('/')
}

const FinalStep = ({ currentStep, maxStep }) => {
    if (currentStep !== maxStep) {
        return null
    }
    return (
        <>
            <div className='text-center mx-4 my-0'>
                <img
                    src='/images/icon-success.png'
                    className='block mx-auto my-4 w-36 md:w-48'
                    alt='icon-success'
                />
                <h2 className='text-xl font-semibold'>
                    Pendaftaran Kamu Berhasil
                </h2>
                <h3 className='text-gray-400 text-lg'>
                    Silahkan cek email secara berkala
                    <span className='font-bold'>
                        <br />- Pengurus Portal Aktivis Salman
                    </span>
                </h3>
                <Button
                    type='button'
                    className='w-full'
                    variant='primary'
                    callbackFunc={goHome}
                >
                    Kembali ke Home
                </Button>
            </div>
        </>
    )
}

export default FinalStep
