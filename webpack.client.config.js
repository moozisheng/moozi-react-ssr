const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const clientConfig = {
    mode: 'development',
    // 客户端入口
    entry: './src/client/index.js',
    // 客户端输出
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './publish')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.spa.html',
            template: 'src/index.spa.html',
            inject: true
        })
    ]
}

module.exports = webpackMerge(baseConfig, clientConfig);
