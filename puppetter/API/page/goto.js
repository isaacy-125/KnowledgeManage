module.exports = function goto(page) {
    return page.goto('https://www.baidu.com', {
        // 不再有网络连接时表示跳转完成
        waitUntil: 'networkidle0',
    });
}