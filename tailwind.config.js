const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
    darkMode: false,
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateRows: {
                timeline: '1fr auto;',
                pageWrapper: '1fr auto;',
            },
            gridTemplateColumns: {
                profile: '1fr 3fr;',
                timeline: '1fr auto 1fr;',
            },
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'bmka-primary-blue': '#1F99CC',

                'bmka-accent-blue': '#8DBCDD',
                'bmka-accent-orange': '#FF7B40',

                'bmka-shade-white': '#F7F5F5',
                'bmka-shade-dark-purple': '#25223C',
            },
            boxShadow: {
                'level-1':
                    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                'level-2':
                    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                'level-3':
                    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                'level-4':
                    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

module.exports = config
