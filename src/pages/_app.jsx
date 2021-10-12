import React from 'react'

import '@styles/preflight.css'
import 'tailwindcss/tailwind.css'
import '@fontsource/roboto/400.css'

const myApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default myApp
