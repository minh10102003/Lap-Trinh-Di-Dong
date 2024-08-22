//Coding Challenge #2
//Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
//Your tasks:
//1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
//Hint: Use an if/else statement
// Test data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

console.log('Test Data 1:');
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else if (markBMI1 < johnBMI1) {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI1.toFixed(2)})!`);
}

// Test data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

console.log('\nTest Data 2:');
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else if (markBMI2 < johnBMI2) {
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI2.toFixed(2)})!`);
}