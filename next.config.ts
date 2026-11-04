import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Markdown docs are maintained manually in Spanish.
  agentRules: false,
  cacheComponents: true,
  // Keep unlisted dynamic params request-rendered so notFound() can return a real 404.
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
