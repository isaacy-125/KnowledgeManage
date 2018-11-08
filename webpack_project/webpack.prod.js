// 这里是build时的webpack配置

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// run build的时候会将./dist文件夹删除 再生成新的./dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
// 以下两个插件为了增加消除冗余css的功能
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    // 便于调试 可看到源代码 但会减慢编译
    devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    // run build时先删除./dist文件夹
    plugins: [
        new CleanWebpackPlugin(['dist']),  // 所要清理的文件夹名称
        // 用于生产时清除冗余css的插件
        new PurifyCssWebpack({
            // 扫描./src/文件夹下所有的html文件引用的css
            paths: glob.sync(path.join(__dirname, 'src/*html'))
        })
    ]
})

