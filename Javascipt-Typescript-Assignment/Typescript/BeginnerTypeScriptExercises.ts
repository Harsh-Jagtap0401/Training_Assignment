// 1. Type Annotations

// Q1: Declare a variable userName of type string and assign it a value.
let userName: string = "Alice";
console.log("Q1: userName:", userName);

// Q2: Create a variable age of type number and a variable isStudent of type boolean.
let age1: number = 25;
let isStudent1: boolean = true;
console.log("\nQ2: age:", age1, "isStudent:", isStudent1);

// Q3: Write a function add(a: number, b: number): number that returns the sum of two numbers.
function add1(a: number, b: number): number {
  return a + b;
}
console.log("\nQ3: Sum of 5 and 10:", add1(5, 10));


// 2. Arrays and Tuples

// Q4: Create an array numbers that can only contain numbers and add three values.
let numbers2: number[] = [1, 2, 3];
console.log("\nQ4: numbers array:", numbers2);

// Q5: Define a tuple [string, number] representing a person's name and age.
let personTuple: [string, number] = ["John", 30];
console.log("\nQ5: personTuple:", personTuple);

// Q6: Write a function that takes a tuple [string, number] and logs a message like: "John is 30 years old."
function logPerson(tuple: [string, number]): void {
  console.log(`${tuple[0]} is ${tuple[1]} years old.`);
}
console.log("\nQ6: Person message:");
logPerson(personTuple);


// 3. Enums and Interfaces

// Q7: Define an enum called Role with values "Admin", "User", and "Guest".
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}
console.log("\nQ7: Role enum:", Role);

// Q8: Create an interface Person with properties name: string, age: number, and city?: string.
interface Person {
  name: string;
  age: number;
  city?: string;
}

// Q9: Implement a function printPerson(person: Person) that logs the person's details.
function printPerson(person: Person): void {
  console.log("\nQ9: Person details:");
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city || "N/A"}`);
}

const person1: Person = { name: "Alice", age: 25, city: "New York" };
const person2: Person = { name: "Bob", age: 30 };

printPerson(person1);
printPerson(person2);


// 4. Functions and Generics

// Q10: Write a generic function reverseArray<T>(arr: T[]): T[] that returns the reversed array.
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}
console.log("\nQ10: Reversed array:", reverseArray([1, 2, 3, 4]));

// Q11: Create a function getFirstElement<T>(arr: T[]): T that returns the first element of an array.
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log("\nQ11: First element of [10, 20, 30]:", getFirstElement([10, 20, 30]));

// Q12: Write an arrow function that takes a string and returns its length.
const stringLength = (str: string): number => str.length;
console.log("\nQ12: Length of 'Hello World':", stringLength("Hello World"));


// 5. Classes and Object-Oriented Programming

// Q13: Create a class Car with properties brand and year. Add a method getCarInfo().
class Car1 {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    getCarInfo() {
        return `Brand: ${this.brand}, Year: ${this.year}`;
    }
}

// Q14: Extend Car with a class ElectricCar that has an extra property batteryLife.
class ElectricVehicle extends Car1 {
    batteryLife: number;

    constructor(brand: string, year: number, batteryLife: number) {
        super(brand, year);
        this.batteryLife = batteryLife;
    }

    getCarInfo() {
        return `Brand: ${this.brand}, Year: ${this.year}, Battery Life: ${this.batteryLife} hours`;
    }

    getElectricCarInfo(): string {
        return `${this.getCarInfo()} with ${this.batteryLife} km battery life`;
    }
}

const myElectricVehicle = new ElectricVehicle("Tesla", 2022, 350);
console.log("\nQ14: Electric Car Info:", myElectricVehicle.getElectricCarInfo());

// Q15: Create a private property engineNumber inside Car and add a method to retrieve it.
class Car2 {
    #engineNumber; // Private property
    brand: string;
    year: number;

    constructor(brand, year, engineNumber) {
        this.brand = brand;
        this.year = year;
        this.#engineNumber = engineNumber;
    }

    getCarInfo() {
        return `Brand: ${this.brand}, Year: ${this.year}`;
    }

    getEngineNumber() {
        return this.#engineNumber;
    }
}
