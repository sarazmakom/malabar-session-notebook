function calculateSum(a, b) {
  //   console.log("BEFORE RETURN");
  return a + b;
  console.log("AFTER RETURN");
}

const sum = calculateSum(5, 25);
const sum1 = calculateSum(3, 4);
const sum2 = calculateSum(25); //this will be NaN as it's missing a parameter

// console.log(sum);
// console.log(sum1);
// console.log(sum2);

function checkInputLength(inputString) {
  if (inputString.length < 3) {
    return true;
  } else {
    return false;
  }
}

// const isValid = checkInputLenght("Hey!");
// console.log(isValid); //false as it's 4 characters long

const isValid = checkInputLength("Hi");
// console.log(isValid); //true as it's 3 characters long

//////

function functionName() {}

const fruits = ["orange", "guava", "jackfruit"];
// console.log("Fruits: ", fruits);

function pushFruit(fruit) {
  fruits.push(fruit);
}

function pushFruit(fruit) {
  if (fruit) {
    fruits.push(fruit);
  } else {
    return;
  }
} //handling the error undefined in case it's not a truthy value

pushFruit("pineapple");
// console.log("More fruits: ", fruits);

// SECOND PART OF THE DAY
function user() {} //not good name
function getUser() {} // better, we can assume it's gonna return a user
function getUserById() {} //even better, more specific

//FIRST way of writing a function:
// function addNumbers(number1, number2) {
//   const sum = number1 + number2;
//   return sum;
// }
// console.log(addNumbers(4, 5));

//SECOND way to write the same function:
// const addNumbers = function (number1, number2) {
//   const sum = number1 + number2;
//   return sum;
// };
// console.log(addNumbers(4, 5));

//THIRD way with arrow function:
// const addNumbers = (number1, number2) => {
//   const sum = number1 + number2;
//   return sum;
// };
// console.log(addNumbers(4, 5));

// if we declare the second parameter as default zero, we can call one parameter and avoid NaN
const addNumbers = (number1, number2 = 0) => {
  const sum = number1 + number2;
  return sum;
};
// without adding =0 to number2, we would get NaN cause it expects 2 parameters
console.log(addNumbers(4));
