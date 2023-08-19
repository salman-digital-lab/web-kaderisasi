/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios'
import cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnackbar } from 'notistack'

import { zustandStore } from '@services'

import AuthenticationOverlay from './overlay'

const Authentication = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar()
    const state = {
        user: zustandStore((state) => state.user),
        setUser: zustandStore((state) => state.setUser),
        isAuthenticating: zustandStore((state) => state.isAuthenticating),
        setIsAuthenticating: zustandStore((state) => state.setIsAuthenticating),
    }

    const closeOverlay = () => {
        const { setIsAuthenticating } = state

        setTimeout(() => {
            setIsAuthenticating(false)
        }, 2000)
    }

    useEffect(async () => {
        const { setUser, isAuthenticating } = state
        const baseURL = process.env.NEXT_PUBLIC_BASE_URL
        const userCookieName = process.env.NEXT_PUBLIC_KEY_COOKIES_USER
        const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION

        if (isAuthenticating) {
            const token = cookies.get(userCookieName)

            if (!token) {
                closeOverlay()

                return
            }

            try {
                const { uid } = jwtDecode(token)

                if (uid) {
                    const response = await axios.get(
                        `${baseURL}/${baseURLVersion}/account/user`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    )

                    const { data } = response.data

                    setUser({ ...data, token })
                }

                closeOverlay()
            } catch (error) {
                if (error.response) {
                    enqueueSnackbar(error.response.data.message, {
                        variant: 'error',
                    });
                } else {
                    let requestInfo = '';
                    if (error.request) {
                        requestInfo = JSON.stringify(error.request);
                    }
                    
                    let configInfo = JSON.stringify(error.config);
                    
                    enqueueSnackbar(requestInfo || error.message, {
                        variant: 'error',
                    });
                    
                    if (configInfo !== '{}') {
                        enqueueSnackbar(configInfo, {
                            variant: 'error',
                        });
                    }
                }
                closeOverlay()
            }
        }
    }, [])

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                {state.isAuthenticating && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={state.isAuthenticating}
                    >
                        <AuthenticationOverlay />
                    </motion.div>
                )}
            </AnimatePresence>
            {!state.isAuthenticating && <div>{children}</div>}
        </div>
    )
}

export default Authentication
