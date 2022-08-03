"use strict";
let age = 540;
let money = 'fifty taka';
const isMilliniore = true;
function add(num1, num2) {
    return num1 + num2;
}
add(12, 15);
function fullName(firstName, lastName) {
    return firstName + "" + lastName;
}
fullName('spider', 'man');
function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleIt(12);
console.log(output);
const multiply = (x, y) => x * y;
// ARRAY
const number = [14, 14, 4, 15, 5];
// const friends:string[]=['rahim','karim','hashem'];
// let largestName:string[]="";
// for (let i = 0; i < friends.length; i++) {
//     const friend:string = friends[i];
//     if(friend.length>largestName.length){
//         largestName=friend;
//     }
// }
// object
const frined = {
    name: 'jon',
    age: 20
};
let player = {
    club: 'real madrid',
    salary: 250000
};
const messi = {
    name: 'messi',
    club: 'barca',
    salary: 200000,
    wife: 'rucojo',
    isPlaying: true,
};
const ronaldo = {
    name: 'ronaldo',
    club: 'paris',
    salary: 250000,
    isPlaying: true,
};
function getBouns(player, friends) {
    return player.salary * 0.1;
}
getBouns(messi, ['sam', 'tanm']);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + '' + this.fatherName;
    }
}
const sam = new Person('marlon', 'david');
