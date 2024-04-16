/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        remotePatterns: [
            { hostname: 'eu-west-2.graphassets.com' }
        ]
    }
};

export default nextConfig;
