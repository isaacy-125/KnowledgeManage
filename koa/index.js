let koa = require('./code/application')

// 初始化koa实例
let app = new koa();
// app.use((req, res) => {
//     res.end('hello word');
// });
app.use((ctx) => {
    console.log(ctx.req.url)
    console.log(ctx.request.req.url)
    console.log(ctx.response.req.url)
    console.log(ctx.request.url)
    console.log(ctx.request.path)
    console.log(ctx.url)
    console.log(ctx.path)
})

app.listen(9999);