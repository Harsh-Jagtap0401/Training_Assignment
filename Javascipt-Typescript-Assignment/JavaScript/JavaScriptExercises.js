// 1. Variables and Data Types

// Q1: Declare a variable name and assign your name to it. Print it to the console.
let name = "John";
console.log("Q1: My name is", name);

// Q2: Create a variable age with a number and a isStudent boolean variable. Log them to the console.
let age = 25;
let isStudent = true;
console.log("\nQ2: Age and isStudent:", age, isStudent);

// Q3: Convert a string "123" to a number and check its type.
let str = "123";
let num = Number(str);
console.log("\nQ3: Converted string to number and its type:", num, typeof num);


// 2. Operators and Conditionals

// Q4: Write a program that checks if a given number is even or odd.
let number = 4;
console.log("\nQ4: Check if number is even or odd:");
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Q5: Create a program that takes two numbers and prints the larger one.
let num1 = 10, num2 = 20;
console.log("\nQ5: Larger of two numbers:");
console.log(num1 > num2 ? num1 : num2);

// Q6: Write a program that checks if a number is positive, negative, or zero.
let n = -5;
console.log("\nQ6: Check if the number is positive, negative, or zero:");
if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}


// 3. Loops

// Q7: Print numbers from 1 to 10 using a for loop.
console.log("\nQ7: Print numbers from 1 to 10 using a for loop:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q8: Print all even numbers between 1 and 20 using a while loop.
let i = 1;
console.log("\nQ8: Print even numbers between 1 and 20 using a while loop:");
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Q9: Use a do-while loop to prompt the user until they enter a number greater than 10.
let input;
do {
//   input = prompt("Enter a number greater than 10:");
} while (input <= 10);
console.log("\nQ9: You entered a number greater than 10:", input);


// 4. Functions

// Q10: Write a function add(a, b) that returns the sum of two numbers.
function add(a, b) {
  return a + b;
}
console.log("\nQ10: Sum of two numbers (5 and 10):", add(5, 10));

// Q11: Write a function factorial(n) that returns the factorial of n.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("\nQ11: Factorial of 5:", factorial(5));

// Q12: Create a function isPrime(n) that returns true if n is prime, else false.
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("\nQ12: Is 7 a prime number?", isPrime(7));


// 5. Arrays and Objects

// Q13: Create an array of five fruits and print each one using a loop.
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log("\nQ13: Print each fruit from the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Q14: Write a function to find the largest number in an array.
function findLargest(arr) {
  return Math.max(...arr);
}
console.log("\nQ14: Largest number in the array [1, 5, 3, 9, 2]:", findLargest([1, 5, 3, 9, 2]));

// Q15: Create an object person with properties name, age, and city. Print each property.
let person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
console.log("\nQ15: Person object properties:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
