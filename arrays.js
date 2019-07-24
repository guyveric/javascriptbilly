/*
// Arrays are lists 
let favouriteSongs = [
    "2Pac - Hail Mary",
    "Kings of Leon - Sex on Fire",
    "The Police - Every Breath You Take"
];
//putting square brackets [] within the brackets can narrow down the items on a list

console.log(favouriteSongs);

favouriteSongs[2] = "Elvis Presley - The Wonder of You"; //replaces an item in thearray

console.log(favouriteSongs);
console.log(favouriteSongs.length);

favouriteSongs.push("2Pac - Changes"); //.push used to add an item to an array
console.log(favouriteSongs);

favouriteSongs.pop(); //.pop takes away the last item added to an array
console.log(favouriteSongs);


//Activity (1)

let favouriteWebsites = [
    "www.google.com",
    "www.1337x.to",
    "www.botb.com"
];
console.log(favouriteWebsites);

favouriteWebsites.push("www.plex.tv", "www.cineworld.co.uk");
console.log(favouriteWebsites);

favouriteWebsites.pop();
console.log(favouriteWebsites);
*/

//Activity 2

//.shift() removes an item from the array at the zeroeth index 
//(top of the list) (The method deletes and returns the removed element from the original array)

let favouriteWebsites = [
    "www.google.com",
    "www.1337x.to",
    "www.botb.com"
]
console.log(favouriteWebsites);

favouriteWebsites.shift();
console.log(favouriteWebsites);
//.shift removed the first item in the array "www.google.com" and reduces the size of the array

//.unshift adds an item to the beginning of thr array

favouriteWebsites.unshift("www.google.com");
console.log(favouriteWebsites);

//.slice creates a new array from another array using a range 
//(the starting number item is included in what is used, but the end number in the range isn't included)

let socialMedia = favouriteWebsites.slice(0, 2);
console.log(socialMedia);

//.splice can insert, remove and replace elements in an array
favouriteWebsites.splice(1, 1);//.splice removed www.1337x.to from the array
console.log(favouriteWebsites);
