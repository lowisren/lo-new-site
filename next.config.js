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
        hostname: "logoipsum.com",
        port: "",
        pathname: "/artwork/**",
      },
    ],
  },
};
