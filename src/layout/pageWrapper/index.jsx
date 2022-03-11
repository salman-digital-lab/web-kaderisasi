import React, { useEffect } from 'react'

import { Authentication } from '@services'
import { Head, Footer, Navigation } from '@layout'
import TawkTo from 'tawkto-react'

const PageWrapper = ({ title, children, plain }) => {
    const tawktoID = process.env.NEXT_PUBLIC_TAWKTO_ID
    const sleekplanID = process.env.NEXT_PUBLIC_SLEEKPLAN_ID

    useEffect(() => {
        var tawk = new TawkTo(tawktoID, 'default')

        window.$sleek = []
        window.SLEEK_PRODUCT_ID = sleekplanID
        ;(function () {
            let d = document
            let s = d.createElement('script')
            s.src = 'https://client.sleekplan.com/sdk/e.js'
            s.async = 1
            d.getElementsByTagName('head')[0].appendChild(s)
        })()
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
