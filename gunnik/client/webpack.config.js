const path = require('path');

module.exports = {
    entry: {
        './artefact': './src/Index.tsx',
        './background/background': './src/background/background.ts',
        './content/content': './src/content/content.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
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