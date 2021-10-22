import React from 'react'

import { Authentication } from '@services'
import { Head, Footer, Navigation } from '@layout'

const PageWrapper = ({ title, children, plain }) => {
    return (
        <>
            <Head title={title} />
            <Authentication>
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
            </Authentication>
        </>
    )
}

export default PageWrapper
