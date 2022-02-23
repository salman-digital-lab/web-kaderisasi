/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import React from 'react'
import Link from 'next/link'

const link = ({ href, children, external }) => {
    if (external) {
        return (
            <a href={href} rel='noopener noreferrer' target='_blank'>
                {children}
            </a>
        )
    }

    return (
        <Link href={href} passHref>
            <a>{children}</a>
        </Link>
    )
}

link.defaultProps = {
    href: '/',
}

export default link
