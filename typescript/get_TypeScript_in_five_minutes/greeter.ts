// 编译ts文件 使用tsc greeter.ts
// 在相同目录下生成greeter.js文件

// 类型注解是一种为函数和变量添加约束的方式
// 在这个例子中希望函数接受一个字符串类型的参数
// 如果你传入参数有错误 但是编译时依然会创建js 只是可能不会按照预期执行
class Student {
    fullName: string;
    // 构造函数上的参数加上public 等同于创建了同名的成员变量
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

// 这里创建了一个接口 实则定义了Person的类型
interface Person {
    firstName: string,
    lastName: string,
}

// 定义person参数是Person类型
function gretter(person: Person) {
    return 'Hello,' + person.firstName + '' + person.lastName;
}

let user = new Student('jane', 'M', 'User');

document.body.innerHTML = gretter(user);