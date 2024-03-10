/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })
    return config
  },

  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
      }
    ]
  }
};

export default nextConfig;
