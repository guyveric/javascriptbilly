/*
if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}


let age = 18;
let country = "UK"
//Variable which holds data regarding the age

if (age > 17 && country == "UK") {
    console.log(`Yes I can serve you`);
}
else {
    console.log(`You aren't old enough`);
}
//if statement with two outcomes regarding age


//Challenge 1

let password = "billybob";

if (password.length < 8) {
    console.log(`The password is too short!`);
}
else {
    console.log(password);
}



//Challenge 2

let num = 44;

if (num % 5 == 0) {
    console.log(`This number is divisible by 5`);
}
else if (num % 3 == 0) {
    console.log(`This number is divisible by 3`);
}
else {
    console.log(`This number is not divisible by 3 or 5`);
}



//Challenge 3

let num = 44

if (num % 3 == 0 && num % 5 == 0) {
    console.log(`fizz buzz`);
}
else if (num % 3 == 0) {
    console.log(`fizz`);
}
else if (num % 5 == 0) {
    console.log(`buzz`);
}
else {
    console.log(num);
}

//Moodle Challenge 1
// A function that checks if a string is a palindrome when called; 
//if it is then 'true' is logged to the console and if it is not then 'false' is logged to the console
const palindrome = (palStr) => {
    let reverseSTR = palStr.split('').reverse().join('');
    if (reverseSTR === palStr) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindrome("10101")

/*
//Moodle Challenge 2

let time = 07;
let placeOfWork = "Code Nation";
let townOfHome = "Stockport";

if (time < 7) {
    console.log(`It's currently ${time} o'clock and I am sleeping, at home in ${townOfHome}.`);
}
else if (time < 8) {
    console.log(`It's currently ${time} o'clock and I am getting ready for work, at home in ${townOfHome}.`);
}
else if (time == 8) {
    console.log(`It's currently ${time} o'clock and I am travelling to work, from ${townOfHome} to ${placeOfWork} in Manchester.`);
}
else if (time == 9) {
    console.log(`It's currently ${time} o'clock and I have arrived at ${placeOfWork} in Manchester to start work.`);
}
else if (time < 17 > 9) {
    console.log(`It's currently ${time} o'clock and currently at ${placeOfWork} in Manchester working.`);
}
else {
    console.log(`At home in ${townOfHome}`)
}


//Moodle Challenge 3

let str1 = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

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
let lastVowelIndex = Math.max(a, e, i, o, u, A, E, I, O, U)
let lastVowelCharacter = str1.charAt(lastVowelIndex)

console.log(`The index of the last vowel of the string is ${lastVowelIndex} and the character is ${lastVowelCharacter}`);


//Moodle Challenge 4

let word = "leve"
let lastChar = (word.length - 1)
if (word.charAt(0) == word.charAt(lastChar)) {
    console.log(true);
}
else {
    console.log(false);
}

//Moodle Challenge 5

let num1 = 5
let num2 = 6

if ((num1 + num2) % 2 == 0) {
    console.log(num1 + num2);
}
else {
    console.log(num1 * num2) 
}


//Moodle Challenge 6

let space1 = "X";
let space2 = "X";
let space3 = "X";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";


console.log("      |       |       ");
console.log(`   ${space1}  |   ${space2}   |   ${space3}    `);
console.log("      |       |       ");
console.log("- - - - - - - - - - -");
console.log("      |       |       ");
console.log(`   ${space4}  |   ${space5}   |   ${space6}    `);
console.log("      |       |       ");
console.log("- - - - - - - - - - -");
console.log("      |       |       ");
console.log(`   ${space7}  |   ${space8}   |   ${space9}    `);
console.log("      |       |       ");

if (space1 == space2 && space2 == space3) {
    console.log("Winner!!");
}
else {
    console.log("Loser!!")
}
*/



