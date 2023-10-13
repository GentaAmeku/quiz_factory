/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
