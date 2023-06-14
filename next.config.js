/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.solucionesrp.com.mx',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
