/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import React from 'react'
import { useRouter } from 'next/router'

import { zustandStore } from '@services'

const withUserAuthentication = (Components) => {
    return (props) => {
        const router = useRouter()

        const state = {
            user: zustandStore((state) => state.user),
        }

        if (typeof window !== 'undefined') {
            const { user } = state

            if (!user) {
                router.replace('/login')

                return (
                    <div className='pb-28 pt-52 text-center'>
                        <h3 className='font-bold'>Redirecting...</h3>
                    </div>
                )
            }
        }

        return <Components {...props} />
    }
}

export default withUserAuthentication
