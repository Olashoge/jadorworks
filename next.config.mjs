/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [process.env.REPLIT_DEV_DOMAIN].filter(Boolean),
  async redirects() {
    return [
      {
        source: "/onboarding",
        destination: "/intake",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
