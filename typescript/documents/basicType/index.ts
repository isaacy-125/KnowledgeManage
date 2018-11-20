// 布尔值
let isDone: boolean = false;


// 数字 所有数字都是浮点数 支持十进制、十六进制、二进制、八进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;


// 字符串 支持单引号 双引号
// 这里把他放在块级里面 主要是因为放在全局会报一个重复定义的错
// 因为typescript自带的类型声明里面声明了同一变量
// 可以使用模板字符串
{
    let name: string = 'bob';
    name = "smith";
}
{
    let name: string = 'Gene';
    let age: number = 37;
    let sentence: string = `Hello, my name is ${name}`;
}


// 数组 定义有两种
// 一个在元素类型后接上[] 表示由此类型元素组成的一个数组
let list: number[] = [1,2,3];
// 另一个是使用数组泛型
let list2: Array<number> = [1,2,3];


// 元组 表示一个已知元素数量类型的数组 各元素类型不比相同
let x: [string, number] = ['hello', 10];


// 枚举 enum是javascript标准类型的一个补充 可以为一组数组赋予友好的名字
{
    enum Color { Red, Green, Blue }
    let c: Color = Color.Green;
}
// 默认情况下 是从0开始编号 也可以手动指定成员的数值
{
    enum Color { Red = 1, Green, Blue }
}
// 可以通过枚举的值 得到他的名字 向上面那个例子 名字Red的值为1
{
    enum Color { Red = 1, Green, Blue }
    let colorName: string = Color[2]; // Green
}


// Any类型 在编程阶段还不清楚类型的变量指定一个类型
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;


// Void 表示没有类型 当一个函数灭有返回值值 他的类型是void
// 声明一个void类型的变量没有什么用 因为你只能赋予它undefined和null
function warnUser(): void {
    console.log('this is my warning message');
}
let unusable: void = undefined;


// Null和Undefined
// 他们是所有类型的子类型 就是说你可以把null和undefined赋值给number类型的变量
let u: undefined = undefined;
let n: null = null;


// Never 表示那些永不存在的值 表示总是会跑出异常或者根本不会有
// 返回值的函数表达式或箭头函数表达式 变量也可以是never类型 当他们
// 被永不为真的类型保护所约束时
function error(message: string): never {
    throw new Error(message);
}


// Object表示非原始类型
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);


// 类型断言 一般出现在你清楚知道一个实体具有比它现有类型更确切的类型
// 有两种形式 一种是尖括号
{
    let someValue: any = 'this is a string';
    let strLength: number = (<string>someValue).length;
}
// 一种是as 如果在typescript中使用jsx时 只有as语法是允许的
{
    let someValue: any = 'this is a string';
    let strLength: number = (someValue as string).length;
}
