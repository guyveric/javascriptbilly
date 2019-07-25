// variable which contains a string
let str1 = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// variable which contains a variable with a method "lastIndexOf" to search the string in the declared variable 
// for the last indexed string I am searching for.

let a = str1.lastIndexOf("a");
let e = str1.lastIndexOf("e");
let i = str1.lastIndexOf("i");
let o = str1.lastIndexOf("o");
let u = str1.lastIndexOf("u");
let A = str1.lastIndexOf("A");
let E = str1.lastIndexOf("E");
let I = str1.lastIndexOf("I");
let O = str1.lastIndexOf("O");
let U = str1.lastIndexOf("U");

//  the use of Math.max returns the largest indexed number of all the variables and places it into the 
// variable declared.
let lastVowelIndex = Math.max(a, e, i, o, u, A, E, I, O, U)

// charAt method used with the original declared string is able to display the correct vowel using the data
// stored in the 'lastVowelIndex' variable
let lastVowelCharacter = str1.charAt(lastVowelIndex)

// console.log displays the information I have provided within its ()
console.log(`The index of the last vowel of the string is ${lastVowelIndex} and the character is ${lastVowelCharacter}`);