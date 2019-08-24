function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  function onGot(item) {
    //   如果有color则边框是color 没有默认blue
    var color = "blue";
    if (item.color) {
      color = item.color;
    }
    document.body.style.border = "10px solid " + color;
  }
  
//   从stoage中拿取color字段
  var getting = browser.storage.local.get("color");
//   拿到之后回调
  getting.then(onGot, onError);