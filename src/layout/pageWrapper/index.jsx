import React from 'react'

import { Head, Footer, Navigation } from '@layout'

const PageWrapper = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div>
                <div>
                    <Navigation />
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
