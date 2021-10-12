const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
    darkMode: false,
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateRows: {
                pageWrapper: '1fr auto;',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

module.exports = config
