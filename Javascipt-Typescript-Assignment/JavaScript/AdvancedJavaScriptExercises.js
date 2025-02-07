// 1. Higher-Order Functions and Callbacks

// Q16: Write a function that takes an array and a callback function, then applies the callback to each element.

function applyCallback(arr, callback) {
    arr.forEach(callback);
  }
  console.log("Q16: Apply callback to each element in array:");
  applyCallback([1, 2, 3, 4], (num) => console.log(num * 2)); 

  
  // Q17: Use .map() to create a new array that contains the square of each number in [2, 4, 6, 8].
  const numbers = [2, 4, 6, 8];
  const squares = numbers.map(num => num * num);
  console.log("\nQ17: Squares of numbers:", squares);

  
  // Q18: Use .filter() to return only numbers greater than 10 from [5, 12, 8, 130, 44].
  const numbersArray = [5, 12, 8, 130, 44];
  const filteredNumbers = numbersArray.filter(num => num > 10);
  console.log("\nQ18: Numbers greater than 10:", filteredNumbers);
  
  
  // 2. Asynchronous JavaScript
  
  // Q19: Write a function that returns a promise which resolves after 2 seconds.
  function delay() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Resolved after 2 seconds'), 2000);
    });
  }
  console.log("\nQ19: Waiting for promise...");
  delay().then(response => console.log(response));
  
  // Q20: Fetch data from https://jsonplaceholder.typicode.com/posts using fetch() and async/await.
  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("\nQ20: Fetched data from API:", data.slice(0, 3)); // Display first 3 posts for brevity
  }
  fetchData();
  
  
  // 3. ES6+ Features
  
  // Q21: Use the spread operator to merge two arrays [1, 2, 3] and [4, 5, 6].
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];
  console.log("\nQ21: Merged arrays:", mergedArray);

  
  // Q22: Write a function that uses destructuring to extract properties from an object.
  const person = { name: 'Alice', age: 30, city: 'New York' };
  function extractProperties({ name, age, city }) {
    console.log("\nQ22: Destructured properties:", name, age, city);
  }
  extractProperties(person);

  
  // Q23: Use template literals to print "Hello, my name is [name] and I am [age] years old."
  const name = "John";
  const age = 25;
  console.log(`\nQ23: Template literal - Hello, my name is ${name} and I am ${age} years old.`);
  
  
  // 4. Closures and Scope
  
  // Q24: Write a function that returns another function that increments a counter.
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      console.log("\nQ24: Counter value:", count);
    };
  }
  const counter = createCounter();
  counter();
  counter();
  counter();
  
  // Q25: Demonstrate block scope using let and const.
  if (true) {
    let blockScoped = "I'm inside a block!";
    const blockConst = "I'm also inside a block!";
    console.log("\nQ25: Block-scoped variables:", blockScoped, blockConst);
  }
  // console.log(blockScoped); // Uncommenting this would throw an error
  // console.log(blockConst); // Uncommenting this would throw an error
  

  
  // 5. Prototypes and Classes
  
  // Q26: Create a constructor function Car with properties make and year.
  function Car(make, year) {
    this.make = make;
    this.year = year;
  }
  const car1 = new Car('Toyota', 2015);
  console.log("\nQ26: Car object:", car1);
  
  // Q27: Convert the above Car function into a class and add a method getAge().
  class CarClass {
    constructor(make, year) {
      this.make = make;
      this.year = year;
    }
    
    getAge(currentYear) {
      return currentYear - this.year;
    }
  }
  const car2 = new CarClass('Honda', 2010);
  console.log("\nQ27: Car age:", car2.getAge(2025));


  
  // Q28: Create a subclass ElectricCar that extends Car and adds a property batteryLife.
  class ElectricCar extends CarClass {
    constructor(make, year, batteryLife) {
      super(make, year);
      this.batteryLife = batteryLife;
    }
  }
  const electricCar = new ElectricCar('Tesla', 2020, '100 miles');
  console.log("\nQ28: Electric car object:", electricCar);
  
  

  // 6. Modules and Imports
  
  // Q29: Write two separate JavaScript files where one exports a function and the other imports and uses it.
  
  // File 1 (export.js):
  // File 2 (import.js):

  
  // Q30: Use ES6 modules to import and export functions from different files.
  
  // File 1 (math.js):
  // File 2 (main.js):

  
  