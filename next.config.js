/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  reactStrictMode: true,
  images: {
    domains: ['d205bpvrqc9yn1.cloudfront.net'],
  },
}


module.exports = nextConfig
