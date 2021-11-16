import React from 'react'
import { Button } from '@components'

const FirstStep = ({ currentStep, questionaire }) => {
    if (currentStep === 1) {
        if (questionaire === 0) {
            return (
                <>
                    <h3 className='my-5 mx-auto text-center text-lg'>
                        Apa kamu yakin ingin daftar kegiatan ini ?
                    </h3>
                    <div className='text-center'>
                        <Button
                            type='submit'
                            className='w-1/2'
                            variant='primary'
                        >
                            Daftar
                        </Button>
                    </div>
                </>
            )
        }
        return (
            <h3 className='mx-auto text-center text-lg my-5'>
                Isi kuisioner berikut sebagai syarat untuk mengikuti kegiatan
            </h3>
        )
    }
    return null
}

export default FirstStep
