/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            "media.graphcms.com",
            "media.graphassets.com"
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
