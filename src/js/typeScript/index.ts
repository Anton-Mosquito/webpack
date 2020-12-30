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
    return num1 + num2
}

// mySum = sum;

// console.log(mySum(15,10));


// Objects
let user: {name: string, age : number, logName : ()=> void, jobs:string[] } = {
    name : 'Somebody',
    age : 50,
    jobs : ['a','b'],
    logName() : void {
        console.log(this.name);
    },
}

type User = {name: string, age : number, getJob : ()=> string[], jobs:string[] };

let user2: User = {
    name : 'Somebody',
    age : 30,
    jobs : ['2'],
    getJob() : string[] {
        return this.jobs
    },
}


//Compilator
function logUser(user  : User) :void {
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

const userClass = new UserClass('maxim', 'frontEnd')
console.log(userClass);
console.log(userClass.getAge());
userClass.setTitle(false);




 /**
 *
 *  Classes
 *
 *
 *
 */