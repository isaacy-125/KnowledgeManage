var obj={
    name:"chen",
    family: 'li',
    age: '38',
    get whole() {
        return this.name + this.family
    },
    set setAge(value) {
        return this.age = value;
    }
};
// 对于没有的属性 不会报错 直接undefined
console.log(Reflect.get(obj,"123"));
// 直接获取对应值
console.log(Reflect.get(obj,"name"));
// 获取get方法定义的属性
console.log(Reflect.get(obj,"whole"));
// 通过receiver改变默认行为
console.log(Reflect.get(obj,"whole", {name: '1', family: '2'}));

// set方法赋值 返回bool
console.log(Reflect.set(obj, 'name', 'zheng'), obj.name);
// 添加receiver 改变的是receiver上的属性 原属性没有改变
var receiver = { age: '28' };
console.log(Reflect.set(obj, 'setAge', '18', receiver), obj.age, receiver);
