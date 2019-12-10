const recast = require('recast');

const code =
  `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `;

// 解析代码
const ast = recast.parse(code);
console.log('ast', ast);
// 拿到add函数的ast
const add  = ast.program.body[0]
console.log('add', add);

// 通过改装AST 生成
/**
 * const add = function(a, b) {
 *  return a + b
 * }
 */
const {variableDeclaration, variableDeclarator, functionExpression} = recast.types.builders;
ast.program.body[0] = variableDeclaration('const', [
    variableDeclarator(add.id, functionExpression(
        null,
        add.params,
        add.body
    ))
])

const output = recast.print(ast).code;
console.log('output', output);