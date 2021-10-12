import React from 'react'

import { Head, Footer, Navigation } from '@layout'

const PageWrapper = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div className='w-full min-h-screen max-w-screen-md mx-auto grid grid-rows-pageWrapper'>
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
