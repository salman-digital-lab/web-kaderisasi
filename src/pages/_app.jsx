import React from 'react'
import NextProgress from 'nextjs-progressbar'
import { SnackbarProvider } from 'notistack'

import 'tailwindcss/tailwind.css'
import '@fontsource/roboto/400.css'

import '@styles/global.css'
import '@styles/preflight.css'

const myApp = ({ Component, pageProps }) => {
    return (
        <>
            <NextProgress
                height={3}
                color='#ff7b40'
                options={{ speed: 500, showSpinner: false }}
            />

            <SnackbarProvider
                maxSnack={1}
                autoHideDuration={6000}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Component {...pageProps} />
            </SnackbarProvider>
        </>
    )
}

export default myApp
