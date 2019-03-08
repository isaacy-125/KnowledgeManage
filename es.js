// every 对数组每一项进行callBack
// 如果都符合则返回true 有一项不符合则返回false 并停止后面的循环
// every(fn(value--当前循环值, index--下标, arr--整个数组), thisValue--函数中this的指向)
var a = [1,2,3];
var b = a.every((value, index, arr) => {
    return value > 2
});
console.log(b);

//some 对数组每一项进行callBack
//如果有一项符合则为true 反之都不符合才为false
// some(fn(value--当前循环值, index--下标, arr--整个数组), thisValue--函数中this的指向)
var a = [1,2,3];
var b = a.some((value, index, arr) => {
    return value > 2;
});
console.log(b);

//Array.from从可迭代对象生成数组
var a = Array.from('foo', (v) => v += v);
console.log(a);

//fill 填充数组
var a = Array.from({length: 10}).fill('a');
console.log(a);

//sort 排序
var a = [3,5,2,6,4,10,8];
//升序 b-a降序
var b = a.sort((a, b) => a - b);