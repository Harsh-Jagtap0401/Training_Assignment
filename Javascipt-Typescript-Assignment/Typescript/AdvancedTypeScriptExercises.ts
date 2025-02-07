// 1. Advanced Types (Union, Intersection, Type Aliases)

// Q16: Create a union type ID that can be either string or number.
type IDQ16 = string | number;
let userIDQ16: IDQ16 = 123; // It can be a number or string
console.log("Q16: userID:", userIDQ16);

// Q17: Write an intersection type Employee that combines Person and {salary: number}.
interface PersonQ17 {
  name: string;
  age: number;
}

interface EmployeeQ17 extends PersonQ17 {
  salary: number;
}

let employeeQ17: EmployeeQ17 = { name: "Alice", age: 30, salary: 50000 };
console.log("\nQ17: Employee:", employeeQ17);

// Q18: Create a type alias Shape that can be "Circle" or "Rectangle", and write a function that prints different messages based on the shape type.
type ShapeQ18 = "Circle" | "Rectangle";

function printShapeMessageQ18(shape: ShapeQ18): void {
  if (shape === "Circle") {
    console.log("Q18: This is a Circle.");
  } else {
    console.log("Q18: This is a Rectangle.");
  }
}
printShapeMessageQ18("Circle");
printShapeMessageQ18("Rectangle");


// 2. Type Guards and Narrowing

// Q19: Write a function that checks if a given value is a string or number and logs different messages.
function checkTypeQ19(value: string | number): void {
  if (typeof value === "string") {
    console.log("Q19: It's a string.");
  } else {
    console.log("Q19: It's a number.");
  }
}
checkTypeQ19(42);
checkTypeQ19("Hello");

// Q20: Implement a type guard for an Animal type that checks if it is a Dog or a Cat.
type AnimalQ20 = DogQ20 | CatQ20;

interface DogQ20 {
  type: "Dog";
  breed: string;
}

interface CatQ20 {
  type: "Cat";
  color: string;
}

function isDogQ20(animal: AnimalQ20): animal is DogQ20 {
  return animal.type === "Dog";
}

const dogQ20: AnimalQ20 = { type: "Dog", breed: "Labrador" };

if (isDogQ20(dogQ20)) {
  console.log("Q20: It's a Dog with breed:", dogQ20.breed);
} else {
  console.log("Q20: It's a Cat with color:", (dogQ20 as CatQ20).color);
}


// 3. Generics and Utility Types

// Q21: Use Partial<T> to create a function that makes all properties of Person optional.
interface PersonQ21 {
  name: string;
  age: number;
}

function updatePersonQ21(person: Partial<PersonQ21>): void {
  console.log("Q21: Updated Person:", person);
}

updatePersonQ21({ name: "Bob" });

// Q22: Use Pick<T, K> to create a type that only includes the name and age properties of Person.
type PersonNameAgeQ22 = Pick<PersonQ21, "name" | "age">;

const personQ22: PersonNameAgeQ22 = { name: "Alice", age: 25 };
console.log("\nQ22: Person (Name & Age only):", personQ22);

// Q23: Write a generic interface ApiResponse<T> that includes data: T and success: boolean.
interface ApiResponseQ23<T> {
  data: T;
  success: boolean;
}

function fetchApiQ23<T>(response: ApiResponseQ23<T>): void {
  console.log("Q23: API Response:", response);
}

fetchApiQ23({ data: "Hello World", success: true });


// 4. Advanced Class Features

// Q24: Create a class BankAccount with private balance and methods deposit(amount) and withdraw(amount).
class BankAccountQ24 {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Q24: Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Q24: Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Q24: Insufficient funds.");
    }
  }
}

const accountQ24 = new BankAccountQ24();
accountQ24.deposit(100);
accountQ24.withdraw(50);

// Q25: Implement a singleton class Logger that ensures only one instance can be created.
class LoggerQ25 {
  private static instance: LoggerQ25;

  private constructor() {}

  static getInstance(): LoggerQ25 {
    if (!LoggerQ25.instance) {
      LoggerQ25.instance = new LoggerQ25();
    }
    return LoggerQ25.instance;
  }

  log(message: string): void {
    console.log("Q25: Log Message:", message);
  }
}

const loggerQ25 = LoggerQ25.getInstance();
loggerQ25.log("Singleton Logger");

// Q26: Use an abstract class Animal with a method makeSound(), and implement it in Dog and Cat classes.
abstract class AnimalQ26 {
  abstract makeSound(): void;
}

class DogQ26 extends AnimalQ26 {
  makeSound(): void {
    console.log("Q26: Woof!");
  }
}

class CatQ26 extends AnimalQ26 {
  makeSound(): void {
    console.log("Q26: Meow!");
  }
}

const dogQ26 = new DogQ26();
dogQ26.makeSound();

const catQ26 = new CatQ26();
catQ26.makeSound();


// 5. Decorators and Metadata

// Q27: Create a class decorator that logs the creation of a class instance.
function logClassCreationQ27(constructor: Function) {
  console.log(`Q27: Created instance of ${constructor.name}`);
}

@logClassCreationQ27
class PersonQ27 {
  constructor(public name: string) {}
}

const personQ27 = new PersonQ27("Alice");

// Q28: Implement a method decorator that logs the execution time of a function.
function logExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${propertyKey} executed in ${end - start} milliseconds`);
        return result;
    };

    return descriptor;
}

class Example {
    @logExecutionTime
    someMethod() {
        // Simulate a time-consuming task
        for (let i = 0; i < 1e6; i++) {}
    }
}

const example = new Example();
example.someMethod();

// Q29: Create a property decorator that validates if a string property is non-empty.
function nonEmptyStringQ29(target: any, propertyKey: string): void {
  let value: string;

  const getter = () => value;
  const setter = (newValue: string) => {
    if (newValue.trim().length === 0) {
      console.log(`Q29: ${propertyKey} should not be empty.`);
    } else {
      value = newValue;
    }
  };

  Object.defineProperty(target, propertyKey, { get: getter, set: setter });
}

class PersonQ29 {
  @nonEmptyStringQ29
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const personQ29 = new PersonQ29(" ");
personQ29.name = ""; // Should log a warning about empty string
personQ29.name = "John"; // Works fine

// 6. Modules and Namespaces

// Q30: Split TypeScript code into two modules where one exports an interface and another imports and uses it.


import { IProductQ30 } from "./productModuleQ30";
const productQ30: IProductQ30 = { id: 1, name: "Laptop" };
console.log("\nQ30: Product:", productQ30);

// Q31: Create a namespace Utils with a function capitalize(text: string): string.
namespace UtilsQ31 {
  export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

console.log("\nQ31: Capitalized Text:", UtilsQ31.capitalize("hello world"));
