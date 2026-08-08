import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import path from "path";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  serverExternalPackages: ["@prisma/client", ".prisma/client"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
