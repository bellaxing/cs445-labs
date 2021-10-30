"use strict";
// let arr: string[] = ["1", "2", "3"];
// let arr2: Array<number> = [1, 2, 3];
// let fruit: (number | string)[] = [1, 3, 3, "asd"];
// console.log(arr, arr2, fruit);
// interface person {
//   name: string;
//   age: number;
//   getAge(): void;
//   setAge(num: number): number;
// }
// let student: person = {
//   name: "winny",
//   age: 3223,
//   getAge() {
//     console.log(this.age);
//   },
//   setAge(age) {
//     return this.age * age;
//   },
// };
// student.age = 999;
// console.log(student.age);
// console.log(student.name);
// student.getAge();
// student.setAge(111);
// interface n {
//   name: string;
// }
// interface a extends n {
//   age: number;
// }
// let person: a = {
//   name: "dffds",
//   age: 32,
// };
// interface Person {
//   name: string;
//   age: number;
//   getName(): string;
//   setAge(age: number): number;
// }
// class Student implements Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getName() {
//     return this.name;
//   }
//   setAge(age: number) {
//     return (this.age = age);
//   }
// }
// let c = new Student("miki", 11);
// console.log(c.getName());
class Miki {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}
class Yoel extends Miki {
    constructor(color, name, age, isStudent) {
        super(name, age, isStudent);
        this.color = color;
    }
}
let x = new Yoel("balck", "yoel", 1, true);
console.log(x);
