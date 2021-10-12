import React from 'react'

import { Head } from '@layout'

const PageWrapper = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default PageWrapper
