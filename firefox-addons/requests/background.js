function logURL(requestDetails) {
    console.log("requestDetails: " + requestDetails);
    console.log("Loading: " + requestDetails.url);
  }

//   在请求前增加监听器 调用logURL方法
  chrome.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: ["<all_urls>"]}
  );