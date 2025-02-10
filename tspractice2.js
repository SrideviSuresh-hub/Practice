var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var person;
person = {
    fname: 'lalala',
    mname: 'ttttt',
    lname: 'rrrr',
};
// person.fname=''
console.log(person.fname);
function getFullName(person) {
    return "".concat(person.fname, " ").concat(person.mname, " ").concat(person.lname);
}
console.log(getFullName(person));
var format = function (str, age, isUpper) {
    return isUpper ? str.toLocaleLowerCase() : str.toLocaleUpperCase();
};
console.log(format('nnnnn', 20, true));
var Person3 = /** @class */ (function () {
    function Person3(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person3.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Person3;
}());
var p1 = new Person3('aaa', 'bbbb');
console.log(p1.toJson());
var h1 = {
    id: 99,
    name: 'john',
    email: 'john@gmail.com',
    phno: '9999999999'
};
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer;
}());
var Suplier = /** @class */ (function () {
    function Suplier() {
    }
    Suplier.prototype.isInShortlist1 = function () {
        return true;
    };
    return Suplier;
}());
function signContact(partner) {
    var msg = 'ghj';
    if (partner instanceof Customer) {
        msg = partner.isCreditAllowed() ? 'sign contract with customer' : 'credit issued';
    }
    if ('isInShortlist1' in partner) {
        msg = partner.isInShortlist1() ? 'signwith supplier' : 'nedd to evaluate';
    }
    return msg;
}
console.log(signContact(new Suplier()));
//assertion 
var el = document.querySelector('input');
console.log(el.value);
var el2 = document.querySelector('#name');
var aa;
var b = aa;
var c = aa;
// function getRandomElements(items:number[]):number{
//     let randomIndex=Math.floor(Math.random()*items.length);
//     return items[randomIndex];
// }
function getRandomcolors(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return "".concat(items[randomIndex]);
}
function getRandomElements(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 2, 3, 4, 5];
var colors = ['red', 'green', 'blue', 'white', 'black'];
console.log(getRandomElements(numbers));
console.log(getRandomElements(colors));
console.log(typeof getRandomcolors(numbers));
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), { obj2: obj2 });
}
var result = merge({ name: 'aaa' }, { age: 12 });
function mergeObject(obj1, obj2) {
    return __assign(__assign({}, obj1), { obj2: obj2 });
}
var resultObj = mergeObject({ name: 'aaa' }, 
// 25    
{ age: 20 });
console.log(result);
console.log(resultObj);
function prop(obj, key) {
    return obj[key];
}
var s = prop({ name: 'ramu' }, 'name');
console.log(s);
var month = {
    key: 'jan',
    value: 1
};
console.log(month);
var List1 = /** @class */ (function () {
    function List1() {
        this.items = [];
        // console.log(items[]);
    }
    List1.prototype.add = function (o) {
        this.items.push(o);
        return this.items;
    };
    List1.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        return this.items;
    };
    return List1;
}());
var list2 = new List1();
for (var i = 0; i < 5; i++) {
    list2.add(i);
    if (i === 3) {
        list2.remove(i);
    }
}
console.log(list2);
// console.log()
// class Control{
//    state=false;
//     constructor(state:boolean){
//     }
// }
// interface StateControl extends Control{
//     enable():void
// }
//  abstract class Button implements StateControl {
//     enable(){};
//     state=true;
//     }
