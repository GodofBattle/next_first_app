/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/about',
                destination: '/',
                permanent: true
            }
        ]
    },
    skipTrailingSlashRedirect: true,
    skipMiddlewareUrlNormalize: false
};

export default nextConfig;
