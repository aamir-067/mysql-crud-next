/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'overreacted.io',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
