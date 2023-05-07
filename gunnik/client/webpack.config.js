const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = env => {
    return {
        entry: {
            './artefact': './src/Index.tsx',
            './background/background': './src/background/background.ts',
            './content/content': './src/content/content.ts',
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js'
        },
        devServer: {
            port: 8086,
            allowedHosts: 'all',
            static: {
                directory: path.resolve(__dirname, './build')
            }
        },
        module: {
            noParse: /gun\.js$/,
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: [/node_modules/],
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(css|scss)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'],
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@assets": path.resolve(__dirname, "src/assets/"),
                "@contexts": path.resolve(__dirname, "src/contexts/"),
            }
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: env.chrome ? "./src/manifest-chrome.json" : "./src/manifest.json", to: "./manifest.json" },
                    { from: "./public/index.html", to: "./index.html" }
                ],
            }),
        ],
    }
}
