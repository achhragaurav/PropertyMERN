/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['a0.muscache.com',"bayut-production.s3.eu-central-1.amazonaws.com","images.pexels.com"]
  }
}

module.exports = nextConfig
