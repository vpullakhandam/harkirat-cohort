// Assignment
// 1. Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

var favColor = "blue";
let height = 157;
const likePizza = true;
console.log(favColor, height + "cm", likePizza);

// 2. Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?

function getSum(num1, num2) {
  return num1 + num2;
}
console.log(getSum(1, 2));
// if i pass in a string instead of a number, it gets concatenated to the number ex: 1+"hh"="1hh"

// 3. Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  return age > 18;
}
let ageOfPerson = 20;
console.log(canVote(ageOfPerson));

// 4. Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

let num = 20;
if (num % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Write a function called sum that finds the sum from 1 to a number

function getSum2(limitNum) {
  let sumVariable = 0;
  for (let i = 1; i <= limitNum; i++) {
    sumVariable = sumVariable + i;
  }
  return sumVariable;
}
let limitNum = 10;
console.log(getSum2(limitNum));
