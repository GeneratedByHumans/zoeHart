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
    i18n: {
        locales: ['el-GR', 'en-US'], // List of locales your application supports
        defaultLocale: 'en-US', // The default locale you want to use
        localeDetection: true, // Automatically detect the locale from the user's device
    },
};

export default nextConfig;
