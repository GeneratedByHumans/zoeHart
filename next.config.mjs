// Import the required module using ESM syntax
import { hostname } from 'os';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aceternity.com',
            },

            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }

        ],
    },
    webpack(config, { isServer }) {
        if (process.env.ANALYZE) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: isServer ? 8888 : 8889,
                openAnalyzer: true,
            }));
        }
        return config;
    },
};

// Use `export default` for ESM syntax
export default nextConfig;
