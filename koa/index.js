let koa = require('./code/application')

// 初始化koa实例
let app = new koa();
app.use((req, res) => {
    res.end('hello word');
});

app.listen(9999);