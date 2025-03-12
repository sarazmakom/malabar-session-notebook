const greeting = "Hello";
const firstName = "Klaus";
const text = `${greeting} ${firstName}`;

console.log(text);

const firstLetter = "K";
console.log(
  `Does ${firstName} starts with ${firstLetter}?: Answer: ${firstName
    .toUpperCase()
    .startsWith(firstLetter.toUpperCase())}`
);

const lastName = "STILLE";
console.log(lastName.toLowerCase());

const number = "36";
console.log(parseInt(number));
