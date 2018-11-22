var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的定义
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
// 类的继承 从基类中继承属性和方法
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('woof! woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
// 子类重写父类方法 以及调用父类的构造函数
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m");
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        // super关键字为调用父类的构造函数
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log('Galloping');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake('Sammy the Python');
var tom = new Horse('Tommy the Palomino');
sam.move();
tom.move(34);
// 公有变量public 成员默认是public 也可以指定
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    Animal3.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m");
    };
    return Animal3;
}());
// 私有变量private 不能再声明它的类外部访问
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    return Animal4;
}());
//new Animal4('cat').name error
// Rhino继承于Animal5 是兼容的 拥有共同的私有变量
// Employee虽然也有私有变量name 但不是Animal5定义的 所以不兼容
var Animal5 = /** @class */ (function () {
    function Animal5(theName) {
        this.name = theName;
    }
    return Animal5;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal5));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal5('Goat');
var rhino = new Rhino();
var employee = new Employee('Bob');
animal = rhino;
//animal = employee error
// protected变量和private行为类似 但可以在派生类中访问
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, departmeng) {
        var _this = _super.call(this, name) || this;
        _this.department = departmeng;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee2;
}(Person));
var howard = new Employee2('Howard', 'Sales');
console.log(howard.getElevatorPitch());
//console.log(howard.name) error 只能在派生类中调用 不能再实例中
// readonly修饰符 修饰属性为只读 只能在声明或者构造函数中初始化
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
//dad.name = 'Man with the 3-piece suit'; error
// 存储器 类改写成使用get set方法 控制变量的读取和修改
var passcode = 'secret passcode';
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var employee2 = new Employee3();
employee2.fullName = 'BoB Smith';
console.log(employee2.fullName);
// 抽象类 可以作为其他派生类的基类 abstract用于定义抽象类或者抽象类内部的的抽象方法
// 抽象类中的抽象方法不包含具体的实现只能在派生类中实现
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Departmeng name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday ata 10am;');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports;');
    };
    return AccountingDepartment;
}(Department));
var department;
// department = new Department(); error 无法创建一个抽象类的实例
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();
