/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BACKEND_SERVER_HOST: process.env.BACKEND_SERVER_HOST,
  },
};

module.exports = nextConfig;
