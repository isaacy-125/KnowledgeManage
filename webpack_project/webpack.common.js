// 这文件是webpack 公共配置文件 dev和build都会使用这里的配置

// 这里是因为调用webpack模块的一个插件功能 才导入
const webpack = require('webpack');
const path = require('path');
// 自动生成html模板也引入webpack打包后的js插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 分离css插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // webpack入口文件
    // 单一入口写法
    // entry: __dirname + '/src/index.js',
    // 多个入口写法
    entry: {
        index: path.join(__dirname, 'src/index.js'),
        two: path.join(__dirname, './src/two.js')
    },
    // 导出
    output: {
        // 位置
        path: __dirname + '/dist',
        // 文件名
        // 单个文件时指定文件名
        // filename: 'bundle.js',
        // 多个文件时根据name变量指定文件名 name变量为entry里面的key
        filename: '[name].js'
    },
    // loader
    module: {
        rules: [{
            // 正则匹配以.css结尾的文件
            test: /\.css$/,
            // 调用loader是从右往左顺序
            // postcss-loader自动给css加前缀 会读取postcss.config.js配置
            // use: ['style-loader', 'css-loader', 'postcss-loader']
            // 分离css插件
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader'],
                // 这里是为css url路径设置公共路径 虽然感觉这种配置有问题
                publicPath: '../'
            })
        },  {
            // 匹配图片资源 进行打包
            test: /\.(png|jpg|svg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    // 限制小于1kb的图片会转换成base64 大于则不会转换
                    limit: 1000,
                    // 设置打包后图片存放的文件夹名称
                    outputPath: 'images'
                }
            },
        }, {
            // 正则匹配.scss .sass结尾的文件
            test: /\.(scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            // babel配置和jsx支持
            test: /(\.jsx|\.js)$/,
            use: {
                loader: 'babel-loader',
                // 配置可以写在此处 也可以写在.babelrc文件里
                // options: {
                //     presets: ['env', 'react']
                // }
            },
            // 除了node_modules
            exclude: /node_modules/,
        }]
    },
    // 插件配置
    plugins: [
        // 版权声明插件 webpack内置
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            // html 模板路径
            template: path.join(__dirname, '/src/index.template.html')
        }),
        // 热更新插件
        new webpack.HotModuleReplacementPlugin(),
        // 将css分离到./dist文件夹下./css/index.css中
        new ExtractTextPlugin('css/index.css'),
    ]
}