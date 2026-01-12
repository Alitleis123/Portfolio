import type { NextConfig } from "next";

const repoName = "ali-portfolio"; // ⚠️ must match your GitHub repo name exactly

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
