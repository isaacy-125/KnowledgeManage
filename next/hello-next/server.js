const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    // 这里使用了定制化的路由 为了解决如果在link中使用as作为路由面具 在刷新后无法回到本来的路由指定组件
    // 这个方法捕获了路由 并跳转到了正确的组件中
    server.get('/p/:id', (req, res) => {
        const actualPage = '/post';
        const queryParams = {id: req.params.id};
        //  这里通过客户端渲染的方式 渲染组件
        app.render(req,res, actualPage, queryParams);
    })

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3001, (err) => {
        if (err) throw err;
        console.log('Ready on http://localhost:3000')
    })
}).catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
})