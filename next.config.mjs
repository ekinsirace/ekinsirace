/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.ekinsirace.com" }],
        destination: "https://ekinsirace.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
