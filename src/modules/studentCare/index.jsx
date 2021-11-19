/* eslint-disable no-shadow */

import React from 'react'

import { zustandStore } from '@services'
import { Link, Button, Jumbotron, ComponentWrapper } from '@components'

import StudentCareModuleForm from './form'

const StudentCareModule = () => {
    const state = {
        user: zustandStore((state) => state.user),
    }

    return (
        <div>
            <Jumbotron>
                <div className='mb-8 w-full max-w-2xl mx-auto text-center flex flex-col gap-6'>
                    <h1 className='text-white'>Ruang Curhat</h1>
                    <p className='text-white'>
                        Ruang Curhat adalah layanan pengajuan dan pendampingan
                        masalah untuk aktivis Salman ITB. Kamu akan ditemani
                        langsung oleh tim Kaderisasi Salman yang berlatar
                        belakang Psikologi dan Psikoterapi.
                    </p>
                </div>
            </Jumbotron>
            <ComponentWrapper>
                <div className='w-full max-w-xl mb-10 p-6 mx-auto transform -translate-y-10 rounded bg-white shadow-level-1'>
                    {state.user ? (
                        <StudentCareModuleForm
                            name={state.user.name}
                            token={state.user.token}
                        />
                    ) : (
                        <div className='w-full flex flex-col gap-6 text-center'>
                            <h3 className='font-bold text-bmka-primary-blue'>
                                Oops!
                            </h3>
                            <p>Kamu harus login terlebih dahulu dulu</p>
                            <div>
                                <Link href='/login'>
                                    <Button variant='secondary'>Log In</Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </ComponentWrapper>
        </div>
    )
}

export default StudentCareModule
