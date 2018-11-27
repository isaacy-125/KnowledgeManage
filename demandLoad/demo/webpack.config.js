var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry:'./a.js',
    mode:'development',
    output:{
      filename:'[name].js',
    //   设置按需加载的chunk名字
      chunkFilename: '[name].js',
    //   设置一个打包后文件的路径
    // 如果不设置 按需加载的包会找不到
      publicPath: 'dist/'
    },
    // 增加js的babel转换 支持jsx语法
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000,
        // 热更新
        hot: true,
    },
    plugins: [
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
  }