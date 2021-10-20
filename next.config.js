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

    publicRuntimeConfig: {
        projectRoot: __dirname,
    },

    reactStrictMode: true,
}

module.exports = nextConfig
