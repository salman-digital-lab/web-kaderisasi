/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

import { zustandStore } from '@services'
import { ComponentWrapper, Link } from '@components'
import { BMKAFullIcon, MenuIcon, ArrowRightIcon } from '@assets'

import Route from './route'

const Navigation = () => {
    const [isActive, setIsActive] = useState(false)
    const [productChild] = useState([
        {
            name: 'Leaderboard',
            url: 'https://leaderboard.salmanitb.com/',
        },
        {
            name: 'Inventra',
            url: 'https://inventra.salmanitb.com/',
        },
        {
            name: 'Unit Salman',
            url: 'https://ohu.salmanitb.com/',
        },
    ])

    const state = {
        user: zustandStore((state) => state.user),
        isNavbarScrolling: zustandStore((state) => state.isNavbarScrolling),
        setIsNavbarScrolling: zustandStore(
            (state) => state.setIsNavbarScrolling
        ),
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

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 10) {
                state.setIsNavbarScrolling(true)

                return
            }

            state.setIsNavbarScrolling(false)
        })
    }, [])

    return (
        <nav
            className={`fixed left-0 top-0 w-full py-4 bg-bmka-primary-blue z-50 transition-all duration-500 ${
                state.isNavbarScrolling ? 'shadow-level-1' : ''
            }`}
        >
            <ComponentWrapper>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                        <div className='flex items-center w-32'>
                            <BMKAFullIcon />
                        </div>
                    </Link>
                    <div className='hidden md:flex justify-center'>
                        <Route href='/'>Home</Route>
                        <Route href='/activities'>Kegiatan</Route>
                        <Route href='/student-care'>Ruang Curhat</Route>
                        <Route href='/about-us'>Tentang Kami</Route>
                        <Route child={productChild}>Products</Route>
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
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        role='button'
                        onClick={() => setIsActive(true)}
                        className='p-2 md:hidden bg-bmka-accent-orange rounded'
                    >
                        <MenuIcon className='w-8 text-white' />
                    </motion.div>
                    <div
                        className={`fixed bg-bmka-primary-blue z-10 top-0 h-full w-full p-10 md:hidden transition-all duration-500 ${
                            isActive ? 'right-0' : '-right-full'
                        }`}
                    >
                        <div className='flex justify-end'>
                            <div
                                role='button'
                                onClick={() => setIsActive(false)}
                                className='w-min p-2 bg-bmka-accent-orange rounded'
                            >
                                <ArrowRightIcon className='w-6 text-white' />
                            </div>
                        </div>
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
