const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let threeChar = ``;
threeCharEnd = str.slice(str.length-3, str.length);
console.log(threeChar);

//str = str.slice(0, str.length-3);




//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string is ${str}. The modified string is ${threeChar + str.slice(0, str.length-3)}.`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let threeLetters = input.question(`Enter a three letter string:`)


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if(threeLetters)