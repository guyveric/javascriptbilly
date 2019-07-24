/*
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();


//Activity

const coffeeOrder = (size, type) => {
    console.log(`I would like a ${size} ${type} please.`);
}

coffeeOrder("large", "coffee");


const addup = (num1, num2) => {
    return num1 + num2;
}

console.log(addup(2,5));


const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "°F");
// Output: The temperature is 59°F - ° = options/shift/8


// Activity(1)

let orderCount = 0;

const takeOrder = (topping, drink) => {
    console.log(`Pizza with ${topping} and a ${drink}`);
    orderCount++;
    console.log(`This is order number: ${orderCount}`);
}

takeOrder("pineapple", "coke");
takeOrder("pepperoni", "7up"); 
takeOrder("mushrooms", "water");


// Activity 2

let accBal = 400;
let accPin = 1234;

const cashMachine = (pinNum, cash) => {
    if (pinNum == accPin && cash <= accBal) {
        console.log(`Your PIN is correct and the ${cash} you requested is being dispensed!`)    
    } else if (pinNum != accPin) {
        console.log(`PIN number is incorrect!. Please try again.`);
    } else {
        console.log(`Insufficient funds in your account! Please check and try again.`);
    }
}

cashMachine(1234, 300);
cashMachine(1235, 300);
cashMachine(1234, 410);
cashMachine(1235, 500);
*/

// Activity 3

let orderCount = 1;

const takeOrder = (topping, topping2, topping3, topping4, topping5) => {
    console.log(`Sub sandwich with ${topping}, ${topping2}, ${topping3}, ${topping4}, ${topping5}. 
    This is order number: ${orderCount} `);
    orderCount++;
}

takeOrder("Chicken", "Cheese", "Lettuce", "Tomatoes", "Cucumber");
takeOrder("Beef", "Onions", "Tomatoes", "Lettuce", "Mayonnaise"); 
takeOrder("Ham", "Lettuce", "Cheese", "Cucumber", "Pickle");
    

