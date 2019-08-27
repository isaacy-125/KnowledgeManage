const puppeteer = require('puppeteer');
const launch = require('./API/launch');
const newPage = require('./API/page/newPage');
const setViewport = require('./API/page/setViewport');
const goto = require('./API/page/goto');
const screenshot = require('./API/page/screenshot');
const close = require('./API/close');

(async () => {
    // 初始化
    const browser = await launch();
    // // 打开空白页
    const page = await newPage(browser);

    // // 设置浏览器视窗
    await setViewport(page);

    // // 导航地址
    await goto(page);

    // // 截图
    await screenshot(page);

    // 仅支持无头
    // await page.pdf({
    //     path: `screenpdf${Math.random()}.pdf`,
    //     format: 'A4',
    // })

    // 关闭浏览器
    await close(browser);
})();
