function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
// 后面的类型注释是函数的返回值
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var p1 = { x: 10, y: 20 };
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
var myArray2 = ['Alice', 'Bob'];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
