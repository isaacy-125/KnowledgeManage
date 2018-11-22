// 对于泛型我的理解是 可以动态的将传入的值类型保存在一个类型变量里面T
// 然后再内部可以通过拿到T类型变量 来修饰其他变量或者返回值
// 如果我们想函数返回任何传入它的值 并且返回和传入的类型一致 
// 不用泛型的话 一般是这样
function identity(arg) {
    return arg;
}
// 如果使用any类型 并不知道返回的类型是否与传入的类型一致
// 这时使用类型变量
// T帮我们捕获用户传入的类型 再次使用T当做返回类型
// 我们把identity2这个函数叫做泛型
function identity2(arg) {
    return arg;
}
// 使用方法上有两种
// 传入所有参数和类型参数
var output = identity2('myString');
// 第二种是编辑器自动类型推论
var output2 = identity2('myString');
// 由于使用泛型 参数会被当做任意类型的值
// 没有地方指明arg参数有length属性
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }
// 假设我们操作的是数组 则有length属性 原函数可以改写为
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function identity3(arg) {
    return arg;
}
var myIdentity = identity3;
// 泛型类
// 创建类实例的时候传入numer的类型变量
// 定义类的时候内部可以使用这个类型变量修饰变量和方法
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
