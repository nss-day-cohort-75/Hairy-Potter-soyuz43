// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';

// Make 5 pieces of pottery at the wheel
let mug = makePottery('Mug', 1, 3);
let plate = makePottery('Plate', 2, 5);
let bowl = makePottery('Bowl', 3, 7);
let vase = makePottery('Vase', 4, 9);
let cup = makePottery('Cup', 1, 2);

// Log each piece of pottery to the console
console.log(mug);
console.log(plate);
console.log(bowl);
console.log(vase);
console.log(cup);


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000);
let firedPlate = firePottery(plate, 2200);
let firedBowl = firePottery(bowl, 2300);
let firedVase = firePottery(vase, 2100);
let firedCup = firePottery(cup, 2400);

// Log each piece of fired pottery to the console
console.log(firedMug);
console.log(firedPlate);
console.log(firedBowl);
console.log(firedVase);
console.log(firedCup);

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list