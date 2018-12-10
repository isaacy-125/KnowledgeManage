const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devtool: 'source-map',
    resolve: {
        // 一般写模块不会写后缀，在这里配置好相应的后缀，那么当我们不写后缀时，会按照这个后缀优先查找
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
        }, {
            // 使用sourcemap调试
            // enforce:pre表示这个loader要在别的loader执行前执行
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist')
    }
}