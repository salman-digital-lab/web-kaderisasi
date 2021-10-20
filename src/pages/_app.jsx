import React from 'react'
import { SnackbarProvider } from 'notistack'

import 'tailwindcss/tailwind.css'
import '@fontsource/roboto/400.css'

import '@styles/preflight.css'

const myApp = ({ Component, pageProps }) => {
    return (
        <SnackbarProvider
            maxSnack={1}
            autoHideDuration={6000}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Component {...pageProps} />
        </SnackbarProvider>
    )
}

export default myApp
