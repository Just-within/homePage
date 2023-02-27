/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  assetPrefix: isProd ? '/gh-pages/' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig