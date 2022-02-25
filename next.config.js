const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/auth/login',
            },
            {
                source: '/register',
                destination: '/auth/register',
            },
            {
                source: '/forget-password',
                destination: '/auth/forget-password',
            },
        ]
    },

    reactStrictMode: true,
}

module.exports = nextConfig
