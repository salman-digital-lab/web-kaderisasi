/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */

import React, { useState } from 'react'

import { BMKAFullIcon, MenuIcon } from '@assets'
import { zustandStore } from '@services'
import { ComponentWrapper } from '@components'

import Route from './route'

const Navigation = () => {
    const [isActive, setIsActive] = useState(false)

    const state = {
        user: zustandStore((state) => state.user),
    }

    const formatName = (name) => {
        const maxNameLength = 15

        if (!name) {
            return ''
        }

        const nameLength = name.length

        if (nameLength >= maxNameLength) {
            return `${name.substr(0, maxNameLength)}...`
        }

        return name
    }

    return (
        <nav className='fixed left-0 top-0 w-full py-4 bg-bmka-primary-blue z-50'>
            <ComponentWrapper>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center w-32'>
                        <BMKAFullIcon />
                    </div>
                    <div className='hidden md:flex justify-center'>
                        <Route href='/'>Home</Route>
                        <Route href='/activities'>Kegiatan</Route>
                        <Route href='/student-care'>Ruang Curhat</Route>
                        <Route href='/about-us'>Tentang Kami</Route>
                    </div>
                    <div className='hidden md:flex justify-center items-center'>
                        {!state.user ? (
                            <>
                                <Route href='/register'>Daftar</Route>
                                <Route href='/login'>Masuk</Route>
                            </>
                        ) : (
                            <Route href='/profile'>
                                Hi, {formatName(state.user.name)}
                            </Route>
                        )}
                    </div>
                    <div
                        role='button'
                        className='md:hidden text-right'
                        onClick={() => setIsActive(true)}
                    >
                        <MenuIcon />
                    </div>
                    <div
                        className={`fixed bg-bmka-primary-blue z-10  top-0 h-full w-full p-10 md:hidden transition-all ${
                            isActive ? 'right-0' : '-right-full'
                        }`}
                    >
                        <p
                            className='transform rotate-45 text-white text-6xl absolute top-8 right-8 w-8'
                            onClick={() => setIsActive(false)}
                        >
                            +
                        </p>
                        <div className=''>
                            <Route href='/'>Home</Route>
                            <Route href='/activities'>Kegiatan</Route>
                            <Route href='/student-care'>Ruang Curhat</Route>
                            <Route href='/about-us'>Tentang Kami</Route>
                            {!state.user ? (
                                <>
                                    <Route href='/register'>Daftar</Route>
                                    <Route href='/login'>Masuk</Route>
                                </>
                            ) : (
                                <Route href='/profile'>
                                    Hi, {formatName(state.user.name)}
                                </Route>
                            )}
                        </div>
                    </div>
                </div>
            </ComponentWrapper>
        </nav>
    )
}

export default Navigation
