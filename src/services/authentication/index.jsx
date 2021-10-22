/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios'
import cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import React, { useEffect } from 'react'

import { zustandStore } from '@services'

import AuthenticationOverlay from './overlay'

const Authentication = ({ children }) => {
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

                    setUser(data)
                }

                closeOverlay()
            } catch (error) {
                closeOverlay()
            }
        }
    }, [])

    return (
        <div>
            {state.isAuthenticating ? (
                <AuthenticationOverlay />
            ) : (
                <div>{children}</div>
            )}
        </div>
    )
}

export default Authentication
