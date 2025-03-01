// Define variables
let uppercaseApple = "APPLE";
let apple = "apple";
let ten =10;
let twenty =20;
let fruits = ["apple", "banana", "orange"];

// Test for equality and inequality with string
console.log("is apple is equal to apple ");
console.log(apple =="apple");

console.log("Is apple is not equal to apple");
console.log(apple != "apple");

// Tests using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numarical tests
// Equal to
console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);

// Is not equal to
console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty);

// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

// Tests usign "and" & Operators
console.log("\n twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 !== 20);

// Test whether an item is include in array
console.log("\n Is orange include in my Fruits array");
console.log(fruits.includes("orange"));

// Not include
console.log("\nIs orange not include in my Fruits array");
console.log(!fruits.includes("orange"));