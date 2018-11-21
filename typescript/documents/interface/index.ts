// 接口的作用是为类型命名和为代码定义契约
// 代表有一个label属性 并且是string类型
// 只要传入的对象满足上面的要求 就是允许的
interface LabelledValue {
    label: string,
}
function printLabel(labelledObj: LabelledValue): void {
    console.log(labelledObj.label)
}
let myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)


// 可选属性 接口中的属性不全都是必须的
interface SquareConfig {
    color?: string,
    width?: number,
}
// 后面的类型注释是函数的返回值
function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare
}
let mySquare = createSquare({ color: 'black' })


// 只读属性 在对象刚刚创建的时候修改其值 后面不能修改
interface Point {
    readonly x: number,
    readonly y: number
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5 error


// 额外属性检查
// 表示可以有任意数量的属性， 并且只要它们不是color和width 无所谓类型
interface SquareConfig {
    color?: string,
    width?: number,
    [propName: string]: any,
}


// 函数类型
// 接口也可以描述函数类型 需要给接口定义一个调用签名 只有参数列表和返回值类型的函数定义
// 函数的参数名可以不与接口中的一致 只要位置相同
interface SearchFunc {
    (souce: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result >- 1;
}


// 索引类型
// 接口可以描述通过索引得到的类型 比如a[10]或ageMap['daniel']
interface StringArray {
    [index: number]: string,
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];
// 可以给索引签名设置只读 放置索引赋值
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ['Alice', 'Bob'];
// myArray2[2] = 'Mallory'; error


// 类类型
// 明确强制一个类去符合某种契约
interface ClockInterface {
    currentTime: Date,
    setTime(d: Date): void,
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}


// 继承接口 接口可以相互继承 能够从一个接口复制成员到另一个接口
interface Shape {
    color: string,
}
interface PenStroke {
    penWidth: number,
}
interface Square extends Shape, PenStroke {
    sideLength: number,
}
let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;