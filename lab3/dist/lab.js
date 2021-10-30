"use strict";
class University {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    gradation(year) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
let miu = new University("MIU", "MSD");
miu.gradation(2021);
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    },
};
let myself = {
    name: "john",
    bankAccount: bankAccount,
    hobbies: ["Violen", "Cooking"],
};
myself.bankAccount.deposit(3000);
console.log(myself);
class Car {
    constructor(name) {
        this.name = name;
        this.acceleration = 0;
    }
    honk() {
        console.log(`${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
console.log(car.acceleration);
let baseObject = {
    width: 0,
    length: 0,
};
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
