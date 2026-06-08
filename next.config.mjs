/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
  /* config options here */
  experimental: {
    serverComponentsExternalPackages: ["@better-auth/kyselyadapter", "kysely"],
  },
};

export default nextConfig;
