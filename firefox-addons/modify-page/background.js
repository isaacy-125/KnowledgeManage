// 创建一个右键菜单
browser.contextMenus.create({
    id: "eat-page",
    title: "Eat this page"
  });

//   监听菜单点击
  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "eat-page") {
        // 执行脚本
      browser.tabs.executeScript({
        file: "page-eater.js"
      });
    }
  });