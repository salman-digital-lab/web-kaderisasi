/* eslint-disable no-shadow */

import React from 'react'

import { BMKAFullIcon } from '@assets'
import { zustandStore } from '@services'
import { ComponentWrapper } from '@components'

import Route from './route'

const Navigation = () => {
    const state = {
        user: zustandStore((state) => state.user),
    }

    return (
        <nav className='fixed left-0 top-0 w-full py-4 bg-bmka-primary-blue z-50'>
            <ComponentWrapper>
                <div className='flex justify-between'>
                    <div className='flex items-center w-32'>
                        <BMKAFullIcon />
                    </div>
                    <div className='flex justify-center'>
                        <Route href='/'>Home</Route>
                        <Route href='/activities'>Kegiatan</Route>
                        <Route href='/student-care'>Ruang Curhat</Route>
                        <Route href='/about-us'>Tentang Kami</Route>
                    </div>
                    <div className='flex justify-center items-center'>
                        {!state.user ? (
                            <>
                                <Route href='/register'>Daftar</Route>
                                <Route href='/login'>Masuk</Route>
                            </>
                        ) : (
                            <Route href='/profile'>Hi, {state.user.name}</Route>
                        )}
                    </div>
                </div>
            </ComponentWrapper>
        </nav>
    )
}

export default Navigation
