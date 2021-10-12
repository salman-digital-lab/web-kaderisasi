/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import React from 'react'
import Link from 'next/link'

const LinkComponent = ({ href, children, external }) => {
    if (external) {
        return (
            <a href={href} target='_blank'>
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

export default LinkComponent
