/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  outputFileTracing: '.',
  experimental: {
    appDir: true,
    serverActions: true,
  },
}

module.exports = nextConfig
