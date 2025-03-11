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
console.log(isValid); //true as it's 3 characters long

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
