#!/usr/bin/env node
// 此文件用于将读取的文件方法名加上export
const recast = require('recast');
const {
    identifier:id,
    expressionStatement,
    memberExpression,
    assignmentExpression,
    arrowFunctionExpression,
    blockStatement
  } = recast.types.builders

// 这是一个例子 通过builders生成一个exports.add的函数
//   recast.run(function(ast, printSource) {
//     // 一个块级域 {}
//     console.log('\n\nstep1:')
//     const block = blockStatement([]);
//     printSource(block);

//     // 一个键头函数 ()=>{}
//     console.log('\n\nstep2:')
//     const arrowFunction = arrowFunctionExpression([],block);
//     printSource(arrowFunction)

//     // add赋值为键头函数  add = ()=>{}
//     console.log('\n\nstep3:')
//     const add = assignmentExpression('=',id('add'),arrowFunction)
//     printSource(add)

//     // exports.add赋值为键头函数  exports.add = ()=>{}
//     console.log('\n\nstep4:')
//     const exportAdd = expressionStatement(assignmentExpression('=',memberExpression(id('exports'),id('add')), arrowFunction))
//     printSource(exportAdd)
//   });

//   这为拿到文件内容套用更改
recast.run(function(ast, printSource) {
    let funcIds = [];
    // 遍历所有函数
    recast.visit(ast, {
        visitFunctionDeclaration: function(path) {
            const node = path.node;
            const funcName = node.id;
            const params = node.params;
            const body = node.body;

            // 保存函数名
            funcIds.push(funcName.name)
            const rep = expressionStatement(assignmentExpression('=', memberExpression(id('exports'), funcName),
        arrowFunctionExpression(params, body)))
            path.replace(rep)
            return false;
        }
    })
    printSource(ast);
})