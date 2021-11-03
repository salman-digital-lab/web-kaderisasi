import React from 'react'
import { Button } from '@components'

const FirstStep = ({ currentStep, questionaire }) => {
    if (currentStep === 1) {
        if (questionaire === 0) {
            return (
                <>
                    <h3 className='my-4 mx-auto'>
                        Apa kamu yakin ingin daftar kegiatan ini ?
                    </h3>
                    <div className='btn-wrapper'>
                        <Button
                            type='button'
                            className='w-full'
                            variant='primary'
                        >
                            Daftar
                        </Button>
                    </div>
                </>
            )
        }
        return (
            <h3 className='text-center'>
                Isi kuisioner berikut sebagai syarat untuk mengikuti kegiatan
            </h3>
        )
    }
    return null
}

export default FirstStep
