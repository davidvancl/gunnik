const path = require('path');

module.exports = {
    entry: './src/Index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'artefact.js'
    },
    devServer: {
        port: 8086,
        allowedHosts: 'all',
        static: {
            directory: path.resolve(__dirname, './dist')
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
        }
    }
}