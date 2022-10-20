import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { Link } from '@components'

const Route = ({ href, child, children }) => {
    const { pathname } = useRouter()

    const [showChild, setShowChild] = useState(false)

    if (href) {
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
    } else {
        return (
            <div
                onClick={() => setShowChild(!showChild)}
                className={` border-b-4 relative border-transparent transition-all duration-500  cursor-pointer`}
            >
                <div
                    className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:border-bmka-accent-orange ${
                        pathname === href ? 'border-bmka-accent-orange' : ''
                    }`}
                >
                    <p className='text-white'>{children}</p>
                </div>
                {child && (
                    <>
                        {showChild && (
                            <div
                                style={{
                                    marginLeft: '-40%',
                                }}
                                className='hidden w-44 absolute bg-white p-4 flex flex-col gap-4 rounded shadow-level-1 top-20 left-0 right-0 md:flex'
                            >
                                {child.map((item) => {
                                    return (
                                        <Link href={item.url} external>
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </>
                )}
                {child && (
                    <>
                        {showChild &&
                            child.map((item) => (
                                <Link href={item.url}>
                                    <div
                                        className={`p-4 border-b-4 border-transparent transition-all duration-500 hover:border-bmka-accent-orange md:hidden bg-white ${
                                            pathname === href
                                                ? 'border-bmka-accent-orange'
                                                : ''
                                        }`}
                                    >
                                        <p >
                                            {item.name}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </>
                )}
            </div>
        )
    }
}

export default Route
