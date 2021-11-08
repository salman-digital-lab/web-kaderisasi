/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Router from 'next/router'
import { Button } from '@components'
import { SuccessIcon } from '@assets'

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
            <div className='my-5'>
                <div className='flex flex-col gap-4 items-center text-center'>
                    <SuccessIcon />
                    <h2 className='text-xl font-semibold'>
                        Pendaftaran Kamu Berhasil !
                    </h2>
                    <h3 className='text-gray-400 text-lg '>
                        Silahkan cek email secara berkala
                        <span className='font-semibold text-base'>
                            <br />- Pengurus Portal Aktivis Salman -
                        </span>
                    </h3>
                    <Button
                        type='button'
                        className='w-2/3'
                        variant='primary'
                        callbackFunc={goHome}
                    >
                        Kembali ke Home
                    </Button>
                </div>
            </div>
        </>
    )
}

export default FinalStep
