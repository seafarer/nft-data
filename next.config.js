/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imgix.cosmicjs.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
