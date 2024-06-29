/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'media.graphassets.com',
            port: '',
            pathname: '**',
            }
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
        });
        return config;
    },
};
