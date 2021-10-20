import React from 'react'
import { SnackbarProvider } from 'notistack'

import 'tailwindcss/tailwind.css'
import '@fontsource/roboto/400.css'

import '@styles/preflight.css'

const myApp = ({ Component, pageProps }) => {
    return (
        <SnackbarProvider autoHideDuration={3000} maxSnack={1}>
            <Component {...pageProps} />
        </SnackbarProvider>
    )
}

export default myApp
