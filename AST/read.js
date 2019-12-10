#!/usr/bin/env node
// 此文件用于读取demo.js
const recast = require('recast');
// 用于判断AST对象类型
// TNT.Node.assert()，就像在机器里埋好的炸药，当机器不能完好运转时（类型不匹配），就炸毁机器(报错退出)
// TNT.Node.check()，则可以判断类型是否一致，并输出False和True
// 上述Node可以替换成任意AST对象，例如TNT.ExpressionStatement.check(),TNT.FunctionDeclaration.assert()
const TNT = recast.types.namedTypes

recast.run( function(ast, printSource){
    // printSource将ast转换为源码
    printSource(ast);
    recast.visit(ast, {
        // 你想操作函数声明，就使用visitFunctionDelaration遍历，想操作赋值表达式，就使用visitExpressionStatement。 只要在 AST对象文档中定义的对象，在前面加visit，即可遍历。
        // 通过node可以取到AST对象
        // 每个遍历函数后必须加上return false
        visitExpressionStatement: function({node}) {
          printSource(node);
          if(TNT.ExpressionStatement.check(node)){
            console.log('这是一个ExpressionStatement')
          }
          return false
        }
      });
})