module.exports = function screenshot(page) {
    return page.screenshot({
        path: `resources/screenshot${Math.random()}.png`,
    })
}