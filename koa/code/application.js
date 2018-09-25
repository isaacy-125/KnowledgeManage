// 此为入口文件
// koa实则一个类 有use 和 listen方法
// koa实例的listen是http的语法糖 所以要引入http
let http = require('http')
// koa有错误处理机制 监听error 所以要引入event的EventEmitter
let EventEmitter = require('events')
// 然后再引入其他三个自定义模块
let context = require('./context')
let request = require('./request')
let response = require('./response')

class koa extends EventEmitter {
    constructor() {
        super()
        // 自有变量 一个回调函数
        this.fn
    }
    use(fn) {
        this.fn = fn;
    }
    // 创建一个http服务 将fn回调函数作为参数传给createServer
    // 并监听一个端口
    listen(...args) {
        let server = http.createServer(this.fn);
        server.listen(...args);
    }
}

module.exports = koa;
