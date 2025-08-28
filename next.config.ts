import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.roovook.com", // 👈 replace with your actual domain
        pathname: "/**",
      }
    ],
  }
};

export default nextConfig;
