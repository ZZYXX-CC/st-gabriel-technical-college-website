/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Skip ESLint during builds to prevent CI failures due to missing local configs
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Enable Next.js Image Optimization and allow external domains used in the app
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Use source-map in dev to avoid eval so strict CSP doesn't block client runtime
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
}

export default nextConfig
