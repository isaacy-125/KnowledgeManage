// 类的定义
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'hello, ' + this.greeting;
    }
}
let greeter = new Greeter('world');


// 类的继承 从基类中继承属性和方法
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m`)
    }
}
class Dog extends Animal {
    bark() {
        console.log('woof! woof!');
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);


// 子类重写父类方法 以及调用父类的构造函数
class Animal2 {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m`)
    }
}
class Snake extends Animal2 {
    constructor(name: string) {
        // super关键字为调用父类的构造函数
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal2 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping');
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
