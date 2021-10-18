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
        ]
    },

    reactStrictMode: true,
}

module.exports = nextConfig
