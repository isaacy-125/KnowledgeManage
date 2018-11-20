// 布尔值
var isDone = false;
// 数字 所有数字都是浮点数 支持十进制、十六进制、二进制、八进制
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串 支持单引号 双引号
// 这里把他放在块级里面 主要是因为放在全局会报一个重复定义的错
// 因为typescript自带的类型声明里面声明了同一变量
// 可以使用模板字符串
{
    var name_1 = 'bob';
    name_1 = "smith";
}
{
    var name_2 = 'Gene';
    var age = 37;
    var sentence = "Hello, my name is " + name_2;
}
// 数组 定义有两种
// 一个在元素类型后接上[] 表示由此类型元素组成的一个数组
var list = [1, 2, 3];
// 另一个是使用数组泛型
var list2 = [1, 2, 3];
// 元组 表示一个已知元素数量类型的数组 各元素类型不比相同
var x = ['hello', 10];
// 枚举 enum是javascript标准类型的一个补充 可以为一组数组赋予友好的名字
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
}
// 默认情况下 是从0开始编号 也可以手动指定成员的数值
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
}
// 可以通过枚举的值 得到他的名字 向上面那个例子 名字Red的值为1
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    var colorName = Color[2]; // Green
}
// Any类型 在编程阶段还不清楚类型的变量指定一个类型
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
// Void 表示没有类型 当一个函数灭有返回值值 他的类型是void
// 声明一个void类型的变量没有什么用 因为你只能赋予它undefined和null
function warnUser() {
    console.log('this is my warning message');
}
var unusable = undefined;
// Null和Undefined
// 他们是所有类型的子类型 就是说你可以把null和undefined赋值给number类型的变量
var u = undefined;
var n = null;
// Never 表示那些永不存在的值 表示总是会跑出异常或者根本不会有
// 返回值的函数表达式或箭头函数表达式 变量也可以是never类型 当他们
// 被永不为真的类型保护所约束时
function error(message) {
    throw new Error(message);
}
create({ prop: 0 });
create(null);
// 类型断言 一般出现在你清楚知道一个实体具有比它现有类型更确切的类型
// 有两种形式 一种是尖括号
{
    var someValue = 'this is a string';
    var strLength = someValue.length;
}
// 一种是as 如果在typescript中使用jsx时 只有as语法是允许的
{
    var someValue = 'this is a string';
    var strLength = someValue.length;
}
