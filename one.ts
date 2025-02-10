let message: string = "hello world";
console.log(message);
let heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);

let counter: number = 1;

let counter1 = 1;
console.log(counter + " " + counter1);

function setCounter(max = 100) {
  // console.log(max='str');
}
function increment(count: number): number {
  count++;
  return count;
}
console.log(increment(5));
let items = [1, 2, 3, "chh"];
items.push("str");
console.log(items);

document.addEventListener("click", function (event) {
  console.log(event.button);
});
document.addEventListener("scroll", function (event) {
  // console.log(event.button);
});

let decimal: number;
decimal = 10;
console.log(decimal);

let bin = 0b0101;
let bin1: number = 0b1010;
console.log(bin + " " + bin1);

let oct: number = 0o10;
let oct1 = 0o10;
console.log(oct + " " + oct1);

let hex = 0x3af;
let hex1 = 0xfac;
console.log(hex + " " + hex1);

let str1: string = "aaa";
let str2 = "bbb";
let str3 = `this
is using
backticks`;
let str4: string = ` str1: I'am ${str1}  str2: i'am ${str2}`;
console.log(str1 + " " + str2 + " " + str3 + " " + str4);

let pending: boolean = true;
console.log(pending);
let completed = false;
console.log(pending && completed);
console.log(pending || completed);
console.log(!completed);

let arr1: number[] = [1, 2, 3];
let arr2: string[];
arr2 = ["a", "b", "c"];
// arr1.push('s');
// arr2.push(2);
arr1.push(4);
let a1 = arr2[0];
console.log(typeof a1);
console.log(arr1.length);
console.log(arr1.map((e) => e * 2));
let arr3 = [1, "str1", 2, "str2"];
let arr4: (string | number)[] = ["str1", 1];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

let tup1: [string, number] = ["tupstr", 1];
let tup2: [number, number, string?];
tup2 = [1, 2];
console.log(tup1);
console.log(tup2);

enum Month {
  Jan,
  Feb,
  March,
  Apr,
  May,
  Jun,
  July,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function isItSummer(month: Month) {
  let isSummer: boolean;
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

let obj1: {
  name: string;
  age: number;
  getDate: (bool: boolean) => string | void;
};

obj1 = {
  name: "aaa",
  age: 5,
  getDate: (bool: boolean) => {
    console.log(bool);
  },
};
console.log(obj1);

let a: number | string;
a = 66;
console.log(a);
a = "hiiii";
console.log(a);

function func1(a: number | string, b: number | string): number | string {
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

type draggable = {
  drag: () => void;
};
type resizable = {
  resize: () => void;
};

type intersection = draggable & resizable;
let textBox: intersection = {
  drag: () => {},
  resize: () => {},
};

type Mouseevent = "click" | "dblclick" | 10;
let mouse: Mouseevent = 10;

console.log(mouse);

//null/undefined
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("it is null/undefined");
  }
}
greet(null);
greet("namee");
greet(undefined);

//unknown
let res: unknown;

res = 1;
res = true;
res = "string";
res = [12, 22, 33];
console.log(res);
const total = (res as number[]).reduce((a: number, b: number) => a + b, 0);
console.log(total);

//never
// let empty:never='hooo';
type alphanumeric = string & number;

function raiseError(message: string): never {
  throw new Error(message);
}
// console.log(raiseError('hhgghg'));
type Role = "admin" | "user" | "guest";
const authorize = (role: Role): string => {
  switch (role) {
    case "admin":
      return "can do anything";

    case "user":
      return "can do something";
    case "guest":
      return "can do nothing";
    default:
      const _unreachable: never = role;
      throw new Error(`Invalid role :${_unreachable}`);
  }
};
console.log(authorize("user"));

//if else
let discount: number;
let itemCount = 12;
if (itemCount > 0 && itemCount <= 5) {
  discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10;
} else {
  discount = 15;
}
console.log(`you got ${discount}% discount;`);

itemCount = 4;
itemCount <= 10 ? (discount = 10) : (discount = 15);
console.log(discount);

//for
let i = 0;
for (;;) {
  console.log(i);
  i++;
  if (i > 10) break;
}

let list: any = document.querySelector("#list");
while (list.firstChild) {
  list.removeChild(list.firstChild);
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

let product = [
  { name: "phone1", price: 500 },
  { name: "phone2", price: 1000 },
  { name: "phone3", price: 1500 },
];
for (let i = 0; i < product.length; i++) {
  if (product[i].price === 1500) break;
  console.log(product[i]);
}

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 10));

function echo(message: string): void | string {
  console.log(message.toUpperCase());
  return message;
}
console.log(echo("message"));

//optional parameters
let multiply = function (a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
};
console.log(multiply(2, 2));

//default para

function applyDiscount(discount: number = 0.05, price: number) {
  return price * (1 - discount);
}
console.log(applyDiscount(undefined, 10));

function getDay(
  year: number = new Date().getFullYear(),
  month: number
): number {
  let day = 0;
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
console.log(getDay(undefined,2));

//rest params
function combine(...args:(number|string)[]):[number,string]{
  let total=0;
  let str='';
  args.forEach(arg=>{
  if(typeof arg ==='number'){
    total+=arg;
  }
  else if(typeof arg ==='string'){
    str+=arg+" ";
  }
})
return [total,str];
}

const [tot,str]=combine(10,'happy',5,'new','year',10);
console.log(tot,str);
console.log([tot,str]);
console.log({tot},{str});

//function overloading
function addition(a:number,b:number):number;
function addition(a:string,b:string):string;


function addition(a:any,b:any):any{
  if(typeof a ==='number' && typeof b==='number'){
      return a+b;
  }
  else if(typeof a==='string'&& typeof b==='string'){
     return a+b;
  }
  throw new Error('Invalid args');
}

console.log(addition(1,3))
console.log(addition('str1','str2'));

function sum(a:number,b:number):number;
function sum(a:number,b:number,c:number):number;
function sum(a:number,b:number,c?:number):number{
  if(c)
    return a+b+c;
  return a+b;
}
console.log(sum(100,100));


interface User{
  readonly username:string;
  email?:string;
  sound:()=>void;
}

interface User1 extends User{
  age:number;
}

let obj2:User1={
  username:'ramu',
  // email:'ramu@gmail.com',
  age:4,
  sound:()=>
    console.log('bark')
}
// obj2.username='ramuuuuu';
console.log(`user : ${obj2.username}, email: ${obj2.email}, age : ${obj2.age},${obj2.sound()}`)


//class
class Person{
  // readonly //private
  name:string;
  age:number;
  private static headcount:number=0;
  
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
    Person.headcount++;
  }
  public static getHeadCount(){
    return Person.headcount++;
  }
  introduce():string{
    return `Hi,my name is ${this.name} and iam ${this.age} years old`;
  }
}
const person1=new Person('ramu',4);
const person12=new Person('ramu',4);
console.log(person1.introduce());
console.log(Person.getHeadCount());
console.log(person1.name +" "+ person1.age)
class Employee extends Person{
  constructor(name:string,age:number, private jobtitle:string){
    super(name,age);
  }
  // displayJob():void{
  //   console.log(" employee job:"+this.jobtitle);
  // }
  introduce(): string {
    return super.introduce()+" employee job:"+this.jobtitle;
  }
}
let emp1=new Employee('john',28,'analyst');
console.log(emp1.introduce());

abstract class Animal{
   name='aaa';
  color='bbb'

  constructor( name:string,color:string, ){
    this.name=name;
    this.color=color;
  }

  getName():string{
    return this.name;
  }
 abstract getColor():string;
}

class Dog extends Animal{
 static age=5;
   constructor(name:string,color:string,private age:number){
      super(name,color);
   }
   getColor(): string {
     return this.color;
   } 
  static getAge():number{
    return this.age;
   }
}


let dog1=new Dog('nnn','black',5);
console.log(dog1.getColor()+"   "+dog1.getName()+" "+Dog.getAge());







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
