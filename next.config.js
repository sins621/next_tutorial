import "./src/env.js";

/** @type {import("next").NextConfig} */
const coreConfig = {
  images: {
    remotePatterns: [{ hostname: "ra7874ss0o.ufs.sh" }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

import { withSentryConfig } from "@sentry/nextjs";

const config = withSentryConfig(coreConfig, {
  org: "sins-br",
  project: "nextjs_tutorial",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  tunnelRoute: "/monotoring",
  automaticVercelMonitors: true,
});

export default config;
