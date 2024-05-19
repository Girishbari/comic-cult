/** @type {import('next').NextConfig} */
const nextConfig = {

  env: {
    flagsmith_key: process.env.flagsmith_key
  }
};

export default nextConfig;
