/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
    sassOptions: {
        additionalData: `@import "src/app/_app/styles/variables.scss"; @import "src/app/_app/styles/mixins.scss";`,
    },
};

module.exports = withBundleAnalyzer(nextConfig);
