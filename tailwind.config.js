const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
    darkMode: false,
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'bmka-primary-blue': '#1F99CC',

                'bmka-accent-blue': '#8DBCDD',
                'bmka-accent-orange': '#FF7B40',

                'bmka-shade-white': '#F7F5F5',
                'bmka-shade-dark-purple': '#25223C',
            },
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
