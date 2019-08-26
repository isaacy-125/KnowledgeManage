/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
const hidePage = `body > :not(.beastify-image) {
    display: none;
  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
    // 监听点击事件
    document.addEventListener("click", (e) => {

        /**
         * Given the name of a beast, get the URL to the corresponding image.
         */
        function beastNameToURL(beastName) {
            switch (beastName) {
                case "Frog":
                    return browser.extension.getURL("beasts/frog.jpg");
                case "Snake":
                    return browser.extension.getURL("beasts/snake.jpg");
                case "Turtle":
                    return browser.extension.getURL("beasts/turtle.jpg");
            }
        }

        /**
         * Insert the page-hiding CSS into the active tab,
         * then get the beast URL and
         * send a "beastify" message to the content script in the active tab.
         */
        function beastify(tabs) {
            console.log(tabs);
            // 向页面注入css
            browser.tabs.insertCSS({
                code: hidePage
            }).then(() => {
                // 成功之后拿到点击对应的图像url
                let url = beastNameToURL(e.target.textContent);
                // 向content script发送信息
                browser.tabs.sendMessage(tabs[0].id, {
                    command: "beastify",
                    beastURL: url
                });
            });
        }

        /**
         * Remove the page-hiding CSS from the active tab,
         * send a "reset" message to the content script in the active tab.
         */
        function reset(tabs) {
            browser.tabs.removeCSS({
                code: hidePage
            }).then(() => {
                browser.tabs.sendMessage(tabs[0].id, {
                    command: "reset",
                });
            });
        }

        /**
         * Just log the error to the console.
         */
        function reportError(error) {
            console.error(`Could not beastify: ${error}`);
        }

        /**
         * Get the active tab,
         * then call "beastify()" or "reset()" as appropriate.
         */
        // 如果点击的是beast
        console.log(e.target.classList);
        if (e.target.classList.contains("beast")) {
            // 拿到当前激活的页面
            browser.tabs.query({
                    active: true,
                    currentWindow: true
                })
                // 成功调用
                .then(beastify)
                // 失败调用
                .catch(reportError);
        } else if (e.target.classList.contains("reset")) {
            browser.tabs.query({
                    active: true,
                    currentWindow: true
                })
                .then(reset)
                .catch(reportError);
        }
    });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */

//  加载js文件
//  如果执行 content scrpit成功，
//  content script会在页面中一直保持，直到标签被关闭或者用户导航到其他页面
browser.tabs.executeScript({
        file: "/content_scripts/beastify.js"
    })
    // 成功回调
    .then(listenForClicks)
    // 失败回调
    .catch(reportExecuteScriptError);
