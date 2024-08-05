// 1. Write a function that takes a user as an input and greets them with their name and age

function greetFun() {
  return "Hello!" + " " + user.name + " " + "age" + " " + user.age;
}

let user = {
  name: "vaish",
  age: 22,
};
console.log(greetFun(user));

// 2. Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// 3. Also tell the user if they are legal to vote or not

function greetFun1(user2) {
  if (user2.gender == "female") {
    pre_name = "Mrs";
  } else if (user2.gender == "male") {
    pre_name = "Mr";
  } else {
    pre_name = "Others";
  }
  let res =
    "Hi" +
    " " +
    pre_name +
    " " +
    user2.name +
    ", " +
    "your age is" +
    " " +
    user2.age +
    ". ";
  let res1;
  if (user2.age > 18) {
    res1 = "You can vote.";
  } else {
    res1 = "You can't vote.";
  }
  return res + res1;
}

let user2 = {
  name: "vaishnavi",
  age: 22,
  gender: "female",
};
console.log(greetFun1(user2));

// Arrays - 1. Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function newArr(arr1) {
  return arr.filter((num) => num % 2 === 0);
}
let arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(newArr(arr1));

// 2. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function filterAdults(users) {
  return users.filter((user) => user.age > 18);
}

let users = [
  { name: "vaish1", age: 17 },
  { name: "vaish2", age: 22 },
  { name: "vaish3", age: 16 },
  { name: "vaish4", age: 19 },
];
console.log(filterAdults(users));

// 3. create a function that takes an array of objects as input, and returns the users whose age>18 and are male
function filterAdults(users) {
  return users.filter((user) => user.age > 18);
}

let users1 = [
  { name: "vaish1", age: 17, gender: "male" },
  { name: "vaish2", age: 22, gender: "female" },
  { name: "vaish3", age: 16, gender: "female" },
  { name: "vaish4", age: 19, gender: "male" },
];
console.log(filterAdults(users));
