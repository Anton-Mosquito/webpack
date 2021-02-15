import { throwError } from "rxjs";

let numArray: number[] = [1,2,3,];
let strArray: string[] = ['1','2','3'];
let boolArray: boolean[] = [true, false];

let numArray1: Array<number> = [1,2,3,];
let strArray1:  Array<string> = ['1','2','3'];
let boolArray1:  Array<boolean> = [true, false];

// tuples
let array: [number,number,string] = [1, 2, '4'];
let array1: [boolean,string,number] = [true,'4', 5];


// function
const myName: string = 'Anton';
const myAge: number = 50;

// function getMyName() : string {
//     return myName;
// }

// function getmyAge() : number {
//     return myAge;
// }

// function anotherFunc(age :number, prefix : string = 'wfm-') :string {
//     return prefix + age;
// }

// function consoleLog(str:string) :void {
//     console.log(str);
// }

// console.log(getMyName());
// console.log(getmyAge());
// console.log(anotherFunc(40, 'Anton-'));
// console.log(consoleLog('String'));


let mySum: (a : number, b: number) => number;

function sum(num1: number, num2: number) :number{
    return num1 + num2;
}

// mySum = sum;

// console.log(mySum(15,10));

// arrow funcrion
const fullName = (firstName : string, lastName: string) :string => `${firstName} ${lastName}`
// console.log(fullName('Max','Grom')); // Max Grom

function getSum(a:number, ...rest: number[]):number {
    if(!rest.length) return a
    return rest.reduce((ac:number,item:number)=> ac + item, a);
}

//Overload
function overloadedSum(a:string, ...rest:string[]) : string;
function overloadedSum(a:number, ...rest:number[]) : number;

function overloadedSum(a:any,  ...rest:Array<any>) :any {
    if (!rest) return a;
    return rest.reduce((ac:number,item:number)=> ac + item, a);
}

// Callbacl as param
function sumWithCallBack(
    callBack : (ac: number, item : number) => number,
    a: number,
    ...rest : number []
) {
    if (!rest.length) return a;
    return rest.reduce(callBack)
}

sumWithCallBack((ac:number,item:number)=> ac + item, 1,5,55,23,45)


// Objects
let user: {name: string, age : number, logName : ()=> void, jobs:string[] } = {
    name : 'Somebody',
    age : 50,
    jobs : ['a','b'],
    logName() : void {
        console.log(this.name);
    },
}

type UserType = {name: string, age : number, getJob : ()=> string[], jobs:string[] };

let user2: UserType = {
    name : 'Somebody',
    age : 30,
    jobs : ['2'],
    getJob() : string[] {
        return this.jobs
    },
}


//Compilator
function logUser(user  : UserType) :void {
    console.log(user.name + ' ' + user.age);
}

// logUser(user2);


// enum
enum Job {
    frontEnd,
    backEnd = 50,
    designer
}

const job: Job = Job.backEnd;
// console.log(job);

const job2: Job = Job.designer;
// console.log(job2);

//never
function throwNewError(err:string) :never{
    throw new Error(err);
}

// null
let newVariable1;
newVariable1 = null;
let newVariable: number | null = 23;
newVariable = null;


/**
 *
 *  Classes
 *
 *
 *
 */

class UserClass {
    private isTeacher? : boolean;
    protected age : number = 30;

    constructor(public name: string, public job : string){
    }

    public getAge() : number{
        return this.age
    }

    public setTitle(title:boolean) {
        this.isTeacher = title;
        console.log(this.isTeacher);
        
    }
}

// const userClass = new UserClass('maxim', 'frontEnd')
// console.log(userClass);
// console.log(userClass.getAge());
// userClass.setTitle(false);



class User {
    static ageRestriction: number = 18;
    get fullName(): string {
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName : string) {
        const [name,surname] = fullName.split('');
        this.name = name;
        this.surname = surname;
    }

    constructor(private name:string, private surname:string, protected _isAdmin:boolean = false, private age:number) {
        if (this.age <= User.ageRestriction) {
            throw new Error ('Age must be more than 18 year old')
        }
    }

    isUserAdmin(): boolean {
        return this._isAdmin
    }

}

class AdminUser extends User{
    protected _isAdmin:boolean = true;
}

try{
    const max = new User('Max', 'Grom',false, 16);
    const kov = new AdminUser('Anton', 'Kovalev', true, 52);
    
    max.fullName = 'Max Hrom';
    console.log(max);
    console.log(max.isUserAdmin());
} catch (e) {
    console.log(e.message);
}



/**
 *
 *  Classes
 *
 *
 *
 */

 
 /**
 *
 *  Classes inheritance
 *
 *
 *
 */

class UserClass1 {
    private isTeacher? : boolean;
    protected age : number = 30;

    constructor(public name: string, public job : string){
    }

    public getAge() : number{
        return this.age
    }

}

class WFM extends UserClass1 {
    constructor(job:string) {
        super('WFM',job);
        this.age = 100;
    }

    // getAge() : string {
    //     return 'Hello' + this.age;/// нельзя изменить тип возвращаемого значения
    // }
}

const userClass1 = new WFM('frontEnd');
console.log(userClass1);
console.log(userClass1.getAge());

 
 /**
 *
 *  Classes inheritance
 *
 *
 *
 */


  /**
 *
 *  Classes abstract
 *
 *
 *
 */
abstract class Car{
    model? : string;
    year: number = 2020;

    abstract logInfo(info:string): void;

    getCarYear() :number {
        return this.year;
    }
}

class Mercedes extends Car {
    logInfo(info:string): void {
        console.log(info);
    }
}

const car = new Mercedes();
console.log(car);
car.logInfo('drrrnn');
console.log(car.getCarYear());

  /**
 *
 *  Classes abstract
 *
 *
 *
 */


   /**
 *
 *  Interface
 *
 *
 *
 */
// interface ILength {
//     length :number
// }

// function getLength(valiable: ILength ) :void{
//     console.log(valiable.length);
// }

// const box = {
//     name : 'WFV',
//     length : 20
// }

// getLength(box);

// interface IUser {
//     name : string;
//     age? : number;
//     logInfo(info:string) : void;
// }

// interface IgetYear {
//     getYear() :number;
// }

// const userInterface : IUser = {
//     name : 'WFV',
//     age : 20,
//     logInfo(info){
//         console.log('Info', info);
//     }
// };

// class UserInterface implements IUser, IgetYear {
//     name :string = 'Some name';
//     // job : string;
//     // newAge: number;
//     logInfo(info:string) :void{
//         console.log('Info', info);
//     }

//     getYear() :number{
//         return 200;
//     }
// }


   /**
 *
 *  Interface
 *
 *
 *
 */

    /**
 *
 *  Generic
 *
 *
 *
 */
// function genericGetter<T>(data:T) :T{
//     return data
// }

// console.log(genericGetter<string>('WebForMyself').length);
// console.log(genericGetter<number>(100).toFixed(2));

// const arrayGeneric: Array<number> = [1,2,3]; 

// let newGenericFunction: <T>(d: T) => T = genericGetter;

// console.log(newGenericFunction<string>('WebForMyself').length);
// console.log(newGenericFunction<number>(100).toFixed(2));

// class Multiplay<T extends number | string> {
//     constructor(private a:T, private b :T){}

//     public getResult() :number{
//         return +this.a * Number(this.b);
//     }
// }

// const mNumber = new Multiplay<number>(10,5);
// console.log('Number' , mNumber.getResult());


// const mString = new Multiplay<string>('40','60');
// console.log('String' , mString.getResult());

    /**
 *
 *  Generic
 *
 *
 *
 */


 
    /**
 *
 *  Декораторы
 *
 *
 *
 */

// function log(constrFn : Function) {
//     console.log(constrFn);
// }

// function shouldLog(flag: boolean) :any{
//     return flag ? log : null
// }

// @shouldLog(true)
// class UserDecorator {
//     constructor(public name:string, public age :number){
//         console.log('I am a new user!');
        
//     }
// }

// function addShowApearence(constrFn : Function) {
//     constrFn.prototype.showHTML = function () {
//         const pre = document.createElement('pre')
//         pre.innerHTML = JSON.stringify(this);
//         document.body.appendChild(pre)
//     }
// }

// @addShowApearence
// class UserDecorator {
//     constructor(public name:string, public age :number, public job:string){}
// }

// const decor = new UserDecorator('vasya', 56, 'front-end');
// console.log(decor);
// (<any>decor).showHTML()

    /**
 *
 *  Декораторы
 *
 *
 *
 */


     /**
 *
 *  Namespace
 *
 *
 *
 */
namespace Util {
    export function isEmpty(a:any) :boolean{
        return !a;
    }
    
    export function isUndefined(b:any) :boolean{
        return typeof b === 'undefined';
    }
    
    export const PI = Math.PI;
    export const EXP = Math.E;
}

const EXP ='TEST';

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('as'));

console.log(Util.isUndefined(20));
console.log(Util.isUndefined(undefined));
console.log(Util.isUndefined(null));

console.log(Util.PI);
console.log(Util.EXP);

/**
 *
 *  Namespace
 *
 *
 *
 */


 /**
 *
 *  Types
 *
 *
 *
 */

type TypeProduct = {
    id: string,
    sku: string,
    name : string,
    price : number,
    description : any,
};

type NumberString = number | string;

type Product = {
    id : NumberString,
    sku : string,
    name : string,
    price : number, 
    description : any,
};

let product: Product;

product = {
    id : 55,
    sku : 'Subscription',
    name : 'Something text',
    price : 0,
    description : 'Huge string description',
}

//type of
if (typeof product.id === 'number') {
    product.id = product.id + ''; // product.id now is a string type
}

// <TYPE>var

const typedProduct : TypeProduct = <TypeProduct>product;

let descriptionalLength = (<string>typedProduct.description).length;

// var as TYPE
const typedProduct2 : TypeProduct = product as TypeProduct;

descriptionalLength = (typedProduct.description as string).length;


// INTERSECTION
type AdditionalAttributes = {
    weight : number,
    color : string,
};

type AdvanceProduct = TypeProduct & AdditionalAttributes;

const advanceProduct: AdvanceProduct = {
    id : '88',
    sku : 'maker',
    name : 'marker',
    price : 33,
    description : 'Something text',
    weight : 12,
    color : 'red'
};


//Can be reused part o teh type

const subscriptionPoster : AdvanceProduct = {
    ...typedProduct,
    weight : 1,
    color :'blue'
}


// Partial 
let partData : Partial<AdvanceProduct> = {
    color: 'red',
    weight : 4,
}



/**
 *
 *  Types
 *
 *
 *
 */