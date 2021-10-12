module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
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
