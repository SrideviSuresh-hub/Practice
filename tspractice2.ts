




interface Person1{
   readonly fname:string;
    mname?:string;
    lname:string;
}


let person:Person1;
person={
    fname:'lalala',
    mname:'ttttt',
    lname:'rrrr',
}
// person.fname=''
console.log(person.fname);
function getFullName(person:Person1){
    return `${person.fname} ${person.mname} ${person.lname}`;
}
console.log(getFullName(person));
interface ResFormat{
    (str:string,age:number,isUpper:boolean ):string
}

let format:ResFormat=function(str:string,age:number,isUpper:boolean){
    return isUpper? str.toLocaleLowerCase(): str.toLocaleUpperCase();
}
console.log(format('nnnnn',20,true));

interface Json{
     toJson():string;
}
class Person3 implements Json{
    constructor(private fname:string,private lname:string){}
     toJson(){
            return JSON.stringify(this);
        }
}
let p1=new Person3('aaa','bbbb')
console.log(p1.toJson());

interface  Employee extends Person1{
    age:number;
}

interface Identity{
    id:number;
    name:string;
} 

interface Contact{
    email:string;
    phno:string;
}

type Human=Identity &Contact;

let h1:Human={
    id:99,
    name:'john',
    email:'john@gmail.com',
    phno:'9999999999'
}



class Customer{
    isCreditAllowed():boolean{
        return true;
    }
}
class Suplier{
    isInShortlist1():boolean{
        return true;
    }
}

type BusinessPartner=Customer|Suplier;
function signContact(partner:BusinessPartner):string{
    let msg:string='ghj';
    if(partner instanceof Customer){
        msg=partner.isCreditAllowed() ? 'sign contract with customer' : 'credit issued';
    }
    if('isInShortlist1' in partner){
        msg=partner.isInShortlist1() ?'signwith supplier': 'nedd to evaluate';
    }
    return msg;
}
console.log(signContact(new Suplier()))



//assertion 
let el=document.querySelector('input');
console.log((el as HTMLInputElement).value);
let el2=document.querySelector('#name')
// console.log((<HTMLInputElement>el2).value.length);//error
 type A =unknown;
 type B=string;
let aa:A;
let b= aa as B;
let c=<B>aa;

// function getRandomElements(items:number[]):number{
//     let randomIndex=Math.floor(Math.random()*items.length);
//     return items[randomIndex];
// }
function getRandomcolors(items:any[]):any{
    let randomIndex=Math.floor(Math.random()*items.length);
    return `${items[randomIndex]}`;
}
function getRandomElements<T>(items:T[]):T{
    let randomIndex=Math.floor(Math.random()*items.length);
    return items[randomIndex];
}
let numbers:number[]=[1,2,3,4,5];
let colors:string[]=['red','green','blue','white','black'];

console.log(getRandomElements<number>(numbers));
console.log(getRandomElements(colors));
console.log( typeof getRandomcolors(numbers));

function merge<U,V>(obj1:U,obj2:V){
    return {...obj1,obj2}
}
let result=merge(
    {name:'aaa'},
    {age:12}
)
function mergeObject<U extends object,V extends object>(obj1:U,obj2:V){
    return {...obj1,obj2}
}
let resultObj=mergeObject(
    {name:'aaa'},
    // 25    
    {age:20}
)
console.log(result);
console.log(resultObj)

function prop<T,K extends keyof T>(obj:T,key:K){
    return obj[key];
}
let s=prop({name:'ramu'},'name');
console.log(s);

//generic intrfaces - obj properties
interface Inter1<K,V>{
    key:K;
    value:V;
}
let month:Inter1<string,number>={
    key:'jan',
    value:1
}

console.log(month);

interface Collection<T>{
    add(o:T):T[];
}
class List1<T> implements Collection<T>{
    private items:T[]=[];
    add(o:T):T[]{
        this.items.push(o);
        return this.items;
    }
    remove(o:T):T[]{
        let index=this.items.indexOf(o);
        if(index>-1){
            this.items.splice(index,1);
        }
        return this.items;
    }
    
    // console.log(items[]);
}
let list2= new List1<number>();
for(let i=0;i<5;i++){
    list2.add(i);
   if(i===3){
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
