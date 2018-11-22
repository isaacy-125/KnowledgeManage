// 函数定义类型
function add(x: number, y: number): number {
    return x + y;
}
let myAdd = function(x: number, y: number): number {
    return x + y;
}


// TypeScript里的每个函数参数都是必须的 传递给一个函数的参数个数与函数期望的参数个数一致
function buildName(firstName: string, lastName: string) {
    return firstName + lastName;
}
// let result1 = buildName('bob'); error
let result2 = buildName('bob', 'adams');


// 可选参数 javascript里参数都是可选的 没传的时候 值就是undefined
// typescript中使用?实现可选参数
// 可选参数在必须参数后面
function buildName2(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + '' + lastName;
    } else {
        return firstName;
    }
}


// 默认参数 如果用户没有传递这个参数或者传递的参数为undefined时 使用默认参数
function buildName3(firstName: string, lastName = 'Smith') {
    return firstName + '' + lastName;
}


// 剩余参数 可以把所有参数收集到一个变量里
// 剩余参数会被当做个数不限的可选参数 可以一个都没有 也可以有任意个
function buildName4(firstName: string, ...restOfName: string[]) {
    return firstName + '' + restOfName.join('');
}
let employeeName = buildName4('joseph', 'samuel', 'lucas', 'mackinazie');


// this参数 给函数提供一个显示的this参数 this参数是个假的参数，它出现在参数列表的最前面
interface Card {
    suit: string,
    card: number,
}
interface Deck {
    suits: string[],
    cards: number[],
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'deamonds'],
    cards: Array[52],
    // this指向的是Deck对象
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor((Math.random()) * 52)
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
        }
    }
}


