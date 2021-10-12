import React from 'react'
import { useRouter } from 'next/router'

import { Link } from '@components'

const Route = ({ href, children }) => {
    const { pathname } = useRouter()

    return (
        <Link href={href}>
            <div
                className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:border-bmka-accent-orange ${
                    pathname === href ? 'border-bmka-accent-orange' : ''
                }`}
            >
                <p className='text-white'>{children}</p>
            </div>
        </Link>
    )
}

export default Route
