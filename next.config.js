/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MARVEL_PUBLIC_KEY: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    MARVEL_PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY,
  },
  images: {
    domains: ["i.annihil.us"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};

module.exports = nextConfig;
