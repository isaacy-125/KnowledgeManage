# 1.偶然创建的全局变量
```javascript
function foo() {
  let a = b = 0;
  a++;
  return a;
}

foo();
typeof a; // => ???
typeof b; // => ???
```
* let a = b = 0，相当于let a; window.b = 0;a = window.b;
* b定义到了全局，a为函数内变量
* typeof a => undefined; typeof b => number;

# 2.数组的 length 属性
```javascript
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;

clothes[0]; // => ???
```
* 减少 length 属性的值的副作用是删除 自己的 数组元素
* 当 JS 执行 clothes.length = 0 时，删除所有的 clothes 项
* clothes[0] => undefined

# 3.闭包
```javascript
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}
```
* for循环每次都创建新的log函数 捕获变量i
* settimeout后调用log 拿取最新i
* 3,3,3

# 4.变量提升
```javascript
myVar;   // => ???
myConst; // => ???

var myVar = 'value';
const myConst = 3.14;
```
* const前定义变量报错
* var 变量提升为undefined

# 5.执行顺序
```javascript
var a = {n: 1}
var b = a;
a.x = a = {n: 2}
a.x => ?
b.x => ?
```
* a,b 同时指向内存地址{n: 1}
* 表达式赋值默认从右往左 但.的优先级最高 先执行a.x a,b 都指向一个新的地址{n: 1, x: undefined}
* 然后a赋值为{n: 2}
* 最后a为{n:2}
* b = {n: 1, x: {n: 2}}