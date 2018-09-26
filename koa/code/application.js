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
        // 以下的是ctx可以获取到的上下文对象和req res
        this.context = context
        this.request = request
        this.response = response
    }
    use(fn) {
        this.fn = fn;
    }
    // 这个函数就是创建ctx对象 koa use函数的第一个参数 用于获取上下文和req res
    createContext(req, res) {
        // 这里是基于this.context创建一个副本 改变副本不会改变this.context的值
        const ctx = Object.create(this.context)
        // 后面两个就是给ctx增加request response键值
        const request = ctx.request = Object.create(this.request)
        const response = ctx.response = Object.create(this.response)

        // 下面这一段说实话 我有点懵 
        // 但是目的就是为了创建ctx这个对象
        ctx.req = request.req = response.req = req
        ctx.res = request.res = response.res = res
        request.ctx = response.ctx = ctx
        request.response = response
        response.request = request
        return ctx
    }
    // 这里的参数req, res是http.createServer自带参数
    handleRequest(req, res) {
        let ctx = this.createContext(req, res)
        // 这里是给回调函数传入ctx对象
        this.fn(ctx)
        // 这也有点懵 感觉直接调用回调函数就行了 
        res.end(ctx.body) // ctx.body用来输出到页面，后面会说如何绑定数据到ctx.body
    }
    // 创建一个http服务 将fn回调函数作为参数传给createServer
    // 并监听一个端口
    // bind(this) 防止this丢失
    listen(...args) {
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(...args);
    }
}

module.exports = koa;
