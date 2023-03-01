/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  /*images: {
    domains: ["logoipsum.com"],
  },*/
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.logoipsum.com" && "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
