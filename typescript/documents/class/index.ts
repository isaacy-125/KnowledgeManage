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
let tom: Animal2 = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);


// 公有变量public 成员默认是public 也可以指定
class Animal3 {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}


// 私有变量private 不能再声明它的类外部访问
class Animal4 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
//new Animal4('cat').name error
// Rhino继承于Animal5 是兼容的 拥有共同的私有变量
// Employee虽然也有私有变量name 但不是Animal5定义的 所以不兼容
class Animal5 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Rhino extends Animal5 {
    constructor() {
        super('Rhino');
    }
}
class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName
    }
}
let animal = new Animal5('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');
animal = rhino;
//animal = employee error


// protected变量和private行为类似 但可以在派生类中访问
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Employee2 extends Person {
    private department: string;
    constructor(name: string, departmeng: string) {
        super(name)
        this.department = departmeng;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}
let howard = new Employee2('Howard', 'Sales');
console.log(howard.getElevatorPitch());
//console.log(howard.name) error 只能在派生类中调用 不能再实例中


// readonly修饰符 修饰属性为只读 只能在声明或者构造函数中初始化
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus('Man with the 8 strong legs');
//dad.name = 'Man with the 3-piece suit'; error


// 存储器 类改写成使用get set方法 控制变量的读取和修改
let passcode = 'secret passcode';
class Employee3 {
    // 变量定义为private 只能在类内部访问修改 避免外部随意修改
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == 'secret passcode') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized update of employee')
        }
    }
}
let employee2 = new Employee3();
employee2.fullName = 'BoB Smith';
console.log(employee2.fullName);


// 抽象类 可以作为其他派生类的基类 abstract用于定义抽象类或者抽象类内部的的抽象方法
// 抽象类中的抽象方法不包含具体的实现只能在派生类中实现
abstract class Department {
    constructor(public name: string) {

    }
    printName(): void {
        console.log('Departmeng name: ' + this.name);
    }
    abstract printMeeting(): void;
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday ata 10am;');
    }
    generateReports(): void {
        console.log('Generating accounting reports;');
    }
}
let department;
// department = new Department(); error 无法创建一个抽象类的实例
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();