/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.ahmetefe.net',
            port: '',
            pathname: '/assets/img/**',
          },
        ],
      },
};

export default nextConfig;