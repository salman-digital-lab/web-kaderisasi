import React from 'react'

import { Head, Footer, Navigation } from '@layout'

const PageWrapper = ({ title, children, plain }) => {
    return (
        <>
            <Head title={title} />
            {!plain ? (
                <div className='w-full min-h-screen grid grid-rows-pageWrapper'>
                    <div>
                        <Navigation />
                        <main>{children}</main>
                    </div>
                    <Footer />
                </div>
            ) : (
                <main>{children}</main>
            )}
        </>
    )
}

export default PageWrapper
