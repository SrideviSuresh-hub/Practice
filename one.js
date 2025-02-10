var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "hello world";
console.log(message);
var heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);
var counter = 1;
var counter1 = 1;
console.log(counter + " " + counter1);
function setCounter(max) {
    if (max === void 0) { max = 100; }
    // console.log(max='str');
}
function increment(count) {
    count++;
    return count;
}
console.log(increment(5));
var items = [1, 2, 3, "chh"];
items.push("str");
console.log(items);
document.addEventListener("click", function (event) {
    console.log(event.button);
});
document.addEventListener("scroll", function (event) {
    // console.log(event.button);
});
var decimal;
decimal = 10;
console.log(decimal);
var bin = 5;
var bin1 = 10;
console.log(bin + " " + bin1);
var oct = 8;
var oct1 = 8;
console.log(oct + " " + oct1);
var hex = 0x3af;
var hex1 = 0xfac;
console.log(hex + " " + hex1);
var str1 = "aaa";
var str2 = "bbb";
var str3 = "this\nis using\nbackticks";
var str4 = " str1: I'am ".concat(str1, "  str2: i'am ").concat(str2);
console.log(str1 + " " + str2 + " " + str3 + " " + str4);
var pending = true;
console.log(pending);
var completed = false;
console.log(pending && completed);
console.log(pending || completed);
console.log(!completed);
var arr1 = [1, 2, 3];
var arr2;
arr2 = ["a", "b", "c"];
// arr1.push('s');
// arr2.push(2);
arr1.push(4);
var a1 = arr2[0];
console.log(typeof a1);
console.log(arr1.length);
console.log(arr1.map(function (e) { return e * 2; }));
var arr3 = [1, "str1", 2, "str2"];
var arr4 = ["str1", 1];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
var tup1 = ["tupstr", 1];
var tup2;
tup2 = [1, 2];
console.log(tup1);
console.log(tup2);
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["March"] = 2] = "March";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["July"] = 6] = "July";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.July:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Month.July));
console.log(isItSummer(Month.Nov));
console.log(isItSummer(0));
var obj1;
obj1 = {
    name: "aaa",
    age: 5,
    getDate: function (bool) {
        console.log(bool);
    },
};
console.log(obj1);
var a;
a = 66;
console.log(a);
a = "hiiii";
console.log(a);
function func1(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("parameter shld be string or numer");
}
console.log(func1(10, 20));
console.log(func1("aaa", "bbb"));
var textBox = {
    drag: function () { },
    resize: function () { },
};
var mouse = 10;
console.log(mouse);
//null/undefined
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("it is null/undefined");
    }
}
greet(null);
greet("namee");
greet(undefined);
//unknown
var res;
res = 1;
res = true;
res = "string";
res = [12, 22, 33];
console.log(res);
var total = res.reduce(function (a, b) { return a + b; }, 0);
console.log(total);
function raiseError(message) {
    throw new Error(message);
}
var authorize = function (role) {
    switch (role) {
        case "admin":
            return "can do anything";
        case "user":
            return "can do something";
        case "guest":
            return "can do nothing";
        default:
            var _unreachable = role;
            throw new Error("Invalid role :".concat(_unreachable));
    }
};
console.log(authorize("user"));
//if else
var discount;
var itemCount = 12;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("you got ".concat(discount, "% discount;"));
itemCount = 4;
itemCount <= 10 ? (discount = 10) : (discount = 15);
console.log(discount);
//for
var i = 0;
for (;;) {
    console.log(i);
    i++;
    if (i > 10)
        break;
}
var list = document.querySelector("#list");
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
var j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);
var product = [
    { name: "phone1", price: 500 },
    { name: "phone2", price: 1000 },
    { name: "phone3", price: 1500 },
];
for (var i_1 = 0; i_1 < product.length; i_1++) {
    if (product[i_1].price === 1500)
        break;
    console.log(product[i_1]);
}
function add(a, b) {
    return a + b;
}
console.log(add(10, 10));
function echo(message) {
    console.log(message.toUpperCase());
    return message;
}
console.log(echo("message"));
//optional parameters
var multiply = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
};
console.log(multiply(2, 2));
//default para
function applyDiscount(discount, price) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(undefined, 10));
function getDay(year, month) {
    if (year === void 0) { year = new Date().getFullYear(); }
    var day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0)
                day = 29;
            else
                day = 28;
            break;
        default:
            throw new Error("invalid month");
    }
    return day;
}
console.log(getDay(undefined, 2));
//rest params
function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    var str = '';
    args.forEach(function (arg) {
        if (typeof arg === 'number') {
            total += arg;
        }
        else if (typeof arg === 'string') {
            str += arg + " ";
        }
    });
    return [total, str];
}
var _a = combine(10, 'happy', 5, 'new', 'year', 10), tot = _a[0], str = _a[1];
console.log(tot, str);
console.log([tot, str]);
console.log({ tot: tot }, { str: str });
function addition(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid args');
}
console.log(addition(1, 3));
console.log(addition('str1', 'str2'));
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(sum(100, 100));
var obj2 = {
    username: 'ramu',
    // email:'ramu@gmail.com',
    age: 4,
    sound: function () {
        return console.log('bark');
    }
};
// obj2.username='ramuuuuu';
console.log("user : ".concat(obj2.username, ", email: ").concat(obj2.email, ", age : ").concat(obj2.age, ",").concat(obj2.sound()));
//class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        Person.headcount++;
    }
    Person.getHeadCount = function () {
        return Person.headcount++;
    };
    Person.prototype.introduce = function () {
        return "Hi,my name is ".concat(this.name, " and iam ").concat(this.age, " years old");
    };
    Person.headcount = 0;
    return Person;
}());
var person1 = new Person('ramu', 4);
var person12 = new Person('ramu', 4);
console.log(person1.introduce());
console.log(Person.getHeadCount());
console.log(person1.name + " " + person1.age);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobtitle) {
        var _this = _super.call(this, name, age) || this;
        _this.jobtitle = jobtitle;
        return _this;
    }
    // displayJob():void{
    //   console.log(" employee job:"+this.jobtitle);
    // }
    Employee.prototype.introduce = function () {
        return _super.prototype.introduce.call(this) + " employee job:" + this.jobtitle;
    };
    return Employee;
}(Person));
var emp1 = new Employee('john', 28, 'analyst');
console.log(emp1.introduce());
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = 'aaa';
        this.color = 'bbb';
        this.name = name;
        this.color = color;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color, age) {
        var _this = _super.call(this, name, color) || this;
        _this.age = age;
        return _this;
    }
    Dog.prototype.getColor = function () {
        return this.color;
    };
    Dog.getAge = function () {
        return this.age;
    };
    Dog.age = 5;
    return Dog;
}(Animal));
var dog1 = new Dog('nnn', 'black', 5);
console.log(dog1.getColor() + "   " + dog1.getName() + " " + Dog.getAge());
// let biggint=9007199254740991n;
// interface product{
//     id:number,
//     name:string,
//     decimal:number
// }
// function getProduct(id):product{
//     return{
//         id:id,
//         name:'aaa',
//         decimal:10
//     }
// }
// const product=getProduct(1);
// console.log(`the product ${product.name} costs $${product.decimal}`)
