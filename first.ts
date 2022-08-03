let age:number=540;
let money:string='fifty taka';
const isMilliniore:boolean=true;

function add(num1:number,num2:number){
    return num1+num2;
}

add(12,15)
function fullName(firstName:string,lastName:string):string{
    return firstName+""+lastName;
}
fullName('spider','man')


function doubleIt(num:number):void{
    const result=num*2;
    console.log(result);
}

const output:void=doubleIt(12);
console.log(output);

const multiply=(x:number,y:number):number=>x*y;

// ARRAY
const number:number[]=[14,14,4,15,5];

// const friends:string[]=['rahim','karim','hashem'];
// let largestName:string[]="";
// for (let i = 0; i < friends.length; i++) {
//     const friend:string = friends[i];
//     if(friend.length>largestName.length){
//         largestName=friend;
//     }
// }

// object
const frined:{name:string, age:number}={
    name:'jon',
    age:20
}

let player:{
    club:string,
    salary:number
}
// player={
//     club:'real madrid',
//     salary:250000
// }
={
    club:'real madrid',
    salary:250000
}

interface Player{
    name:string,
    club:string,
    salary:number,
    wife?:string,
    isPlaying:boolean
}

const messi:Player={
    name:'messi',
    club:'barca',
    salary:200000,
    wife:'rucojo',
    isPlaying:true,
}

const ronaldo:Player={
    name:'ronaldo',
    club:'paris',
    salary:250000,

    isPlaying:true,
}

function getBouns(player:Player,friends:string[]){
    return player.salary*0.1;
}

getBouns(messi,['sam','tanm'])

class Person{
    name:string;
    private _partner:string;
    readonly fatherName:string;
    constructor(name:string,father:string){
        this.name=name;
        this._partner=name;
        this.fatherName=father;
    }
    getName():string{
        return this.name+''+this.fatherName;
    }
}

const sam=new Person('marlon','david');

