import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
