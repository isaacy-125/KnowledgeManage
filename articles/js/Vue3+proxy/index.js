var data = {foo: 'foo'}

var p = new Proxy(data, {
    get(target, key, receiver) {
        console.log('get data');
        console.log(target, key, receiver);
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        console.log('set value')
        console.log(target, key, value, receiver);
        return Reflect.set(target, key, value, receiver);
    }
});
// 对象的赋值只会触发一次set
p.foo = '123';

var data1 = [1,2,3];
var p1 = new Proxy(data1, {
    get(target, key, receiver) {
        console.log('get data1');
        console.log(target, key, receiver);
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        console.log('set value1');
        console.log(target, key, value, receiver);
        return Reflect.set(target, key, value, receiver);
    }
});
// 数组的push会先触发get 获取push属性，再触发get获取length属性，在进行push和length的两次set
// 不同的操作 会触发不同次 不同类型的
p1.push(4);

// set不能处理多层级的对象
