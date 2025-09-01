import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",   // allow all hostnames
      },
      {
        protocol: "http",
        hostname: "**",   // allow all hostnames over http (optional)
      },
    ],
  },
};

export default nextConfig;