// 函数定义类型
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
// TypeScript里的每个函数参数都是必须的 传递给一个函数的参数个数与函数期望的参数个数一致
function buildName(firstName, lastName) {
    return firstName + lastName;
}
// let result1 = buildName('bob'); error
var result2 = buildName('bob', 'adams');
// 可选参数 javascript里参数都是可选的 没传的时候 值就是undefined
// typescript中使用?实现可选参数
// 可选参数在必须参数后面
function buildName2(firstName, lastName) {
    if (lastName) {
        return firstName + '' + lastName;
    }
    else {
        return firstName;
    }
}
// 默认参数 如果用户没有传递这个参数或者传递的参数为undefined时 使用默认参数
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + '' + lastName;
}
// 剩余参数 可以把所有参数收集到一个变量里
// 剩余参数会被当做个数不限的可选参数 可以一个都没有 也可以有任意个
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + '' + restOfName.join('');
}
var employeeName = buildName4('joseph', 'samuel', 'lucas', 'mackinazie');
