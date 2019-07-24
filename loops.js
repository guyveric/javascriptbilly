/*
for( i = 10 ; i > -1 ; i-- ){
    console.log(i);
   }  
// A loop to count back from 10 to 0


for( i = 0 ; i < 11 ; i++ ){
    console.log(i);
   } 
// A loop to count forward from 0 to 10


let favDrinks = [
    "Tea",
    "Coffee",
    "Hot Chocolate"
];

console.log(favDrinks[0]);
console.log(favDrinks[1]);
console.log(favDrinks[2]);

for (drinksIndex = 0; drinksIndex < favDrinks.length;
    drinksIndex++) {
        console.log(favDrinks[drinksIndex]);
    }
*/
// An array of favourite films consisting of 6 elements.
let favFilms = [
    "Avengers Endgame",
    "Terminator 2: Judgement Day",
    "Ghostbusters",
    "The Matrix",
    "Armageddon",
    "Die Hard"
];

// logging each element individually to the console.
console.log(favFilms[0]);
console.log(favFilms[1]);
console.log(favFilms[2]);
console.log(favFilms[3]);
console.log(favFilms[4]);
console.log(favFilms[5]);

// using .push to add elements to the bottom of the array.
favFilms.push("Shawshank Redemption");
favFilms.push("Independence Day");

// A loop that logs each element to the console starting from index 0 for the amount of elements that exist.
// for loops only run the ampunt of times we declare.
for (filmsIndex = 0; filmsIndex < favFilms.length;
    filmsIndex++) {
        console.log(favFilms[filmsIndex]);
    }

// A function that checks if Ghostbusters is the 3rd film in the array. 
// if it is it logs to console confirming with a message and if it isn't it logs to console 
// again but with a different message.
    const filmCheck = () => {
    if (favFilms[2] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters");
    } else {
        console.log("Booo, we want Ghostbusters");
    }
};

filmCheck();





