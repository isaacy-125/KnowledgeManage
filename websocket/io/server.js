const express = require('express');
const app = express();

app.use(express.static(__dirname));
const server = require('http').createServer(app);
const io = require('socket.io')(server)
io.on('connection', function(socket) {
    socket.send('服务端向客户端发送消息');
    socket.on('message', function(msg) {
        console.log(msg);
        socket.send('服务端收到了客户端的消息 并发送消息给客户端');
    })
});

server.listen(3000);