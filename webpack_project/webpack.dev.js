// 这里是dev环境的webpack配置

const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const common = require('./webpack.common');

module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
    devServer: {
        // 本地服务器加载文件的目录
        contentBase: './dist',
        // 端口号
        port: '8088',
        // 文件修改后实时刷新
        inline: true,
        // 跳转指向index.html
        historyApiFallback: true,
        // 热更新
        hot: true,
    },
})

