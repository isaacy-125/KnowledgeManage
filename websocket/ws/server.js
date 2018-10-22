const express = require('express');
const app = express();
app.use(express.static(__dirname));
// 监听3000端口
app.listen(3000);

const Server = require('ws').Server;
// websocket服务在9999端口
const ws = new Server({ port: 9999 })

// 监听连接
ws.on('connection', function(socket) {
    console.log('connection');
    // 这里是监听客户端发来的请求
    socket.on('message', function(msg) {
        console.log(msg);
        socket.send('from server');
    })
})