/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.google.com"],
  },
  env: {
    API_KEY: 'AIzaSyD7Ao31UBmWoJvSy4ScJUWcOTbdVxvQlIo',
    CONTEXT_KEY: '727acd3d696e94c88'
  },
};

module.exports = nextConfig;
