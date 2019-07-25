/*
console.log("All around the world".toUpperCase().charAt(7));
// shows the 8th character capitalised (indexing starts from 0, so 7 is the 8th character)


let favouriteDrink = "latte";
console.log(favouriteDrink);
// variable defines latte to favouriteDrink (so the variable holds the data to be retrieved)


let favouriteDrink = "latte";
console.log("My favourite drink is a " + favouriteDrink);
// variable same as before but with added text as a string to make a sentence when run

let favouriteDrink = "latte";
console.log(`My favourite drink is a ${favouriteDrink}`);
// variable as above but better syntax (use this syntax over anything else)


let usersName = "Billy McGuinness";
let usersAge = "37";
let favouriteColour = "Yellow";

console.log(`Hi, my name is ${usersName}, I am ${usersAge} years old and my favourite colour is ${favouriteColour}`);
// creates a string using multiple variables
*/

// Multiple variables which hold the string its been assigned, which can be called.
let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

// Using multiple console.log lines of code, each with different strings and some
// which include variables to log a grid to the console for 'O's and 'X's
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