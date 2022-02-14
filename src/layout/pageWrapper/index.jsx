import React, { useEffect } from 'react'

import { Authentication } from '@services'
import { Head, Footer, Navigation } from '@layout'
import TawkTo from 'tawkto-react'

const PageWrapper = ({ title, children, plain }) => {
    useEffect(() => {
        var tawk = new TawkTo('5e36a790a89cda5a1883af2f', 'default')
    }, [])
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
