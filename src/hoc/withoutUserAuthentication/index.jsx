/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import React from 'react'
import { useRouter } from 'next/router'

import { zustandStore } from '@services'

const withoutUserAuthentication = (Components) => {
    return (props) => {
        const router = useRouter()

        const state = {
            user: zustandStore((state) => state.user),
        }

        if (typeof window !== 'undefined') {
            const { user } = state

            if (user) {
                router.push('/')

                return <div />
            }
        }

        return <Components {...props} />
    }
}

export default withoutUserAuthentication
