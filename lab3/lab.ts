class University {
  name: string;
  dept: string;
  constructor(name: string, dept: string) {
    this.name = name;
    this.dept = dept;
  }
  gradation(year: number): void {
    console.log(`Graduating ${this.dept} ${year} students`);
  }
}
let miu = new University("MIU", "MSD");
miu.gradation(2021);

let bankAccount: {
  money: number;
  deposit(value: number): void;
} = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
};
let myself: {
  name: string;
  bankAccount: typeof bankAccount;
  hobbies: string[];
} = {
  name: "john",
  bankAccount: bankAccount,
  hobbies: ["Violen", "Cooking"],
};
myself.bankAccount.deposit(3000);
console.log(myself);

class Car {
  name: string;
  acceleration: number;
  constructor(name: string) {
    this.name = name;
    this.acceleration = 0;
  }
  honk(): void {
    console.log(`${this.name} is saying: Toooooooooot!`);
  }
  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
console.log(car.acceleration);

let baseObject: {
  width: number;
  length: number;
} = {
  width: 0,
  length: 0,
};
let rectangle: any = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;

rectangle.calcSize = function (): number {
  return this.width * this.length;
};

console.log(rectangle.calcSize());
