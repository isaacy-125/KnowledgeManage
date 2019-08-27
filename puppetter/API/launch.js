const puppeteer = require('puppeteer');

module.exports = function launch() {
    return puppeteer.launch({
        // 关闭无头模式
        headless: false,
        // 30秒超时时间
        timeout: 30000,
    })
}