// Example of an interview question/problem:


const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];
const word2 = ["Hi", "Germany"];

function findLongestWord(words) {
  // TODO: return the longest word

  /*
  1. Initialize a non constant variable as empty string let longest = 'Inception'; 9
  2. Loop through the array to get access to each element `for-loop`
  3. Compare lengh of the current element with the initialized variable 'Psycho' 6
  4. if the lengh of the current element is greater than the initialized variable then replace the empty string with current element
  5. Repeat this for all the elements in the array and then return the initialized variable at the end of the function

  "Inception"
  */

  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(word2));

/*

suggested solution by interviewee:
first make a foreach loop, loop through, compare length 
or 
use .reduce() which is a bit more complex and it might require more time to complete 

but it would be better to use the simplest version (forEach or for loop) to be sure to finish on time - suggested by interviewer

dry run - running through the approach without writing code

3 main things to keep in mind:
1. understand requirements - make sure you understand the question/problem - rephrase the question
2. discuss the plan - Make a plan on how to solve the problem
3. write code



*/
