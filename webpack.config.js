const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const eslintPettyFormat = require('eslint-formatter-pretty');

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './app',
        port: 8080
    },

    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: './bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-0'],
                            plugins: [
                                'transform-runtime',
                                'transform-decorators-legacy']
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }]
            },
            {
                test: /\.js[x]?$/,
                enforce: 'pre',
                include: /app/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: eslintPettyFormat
                        }
                    }]
            }]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
};
