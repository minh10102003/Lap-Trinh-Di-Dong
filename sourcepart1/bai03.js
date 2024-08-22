//Coding Challenge #3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
//Your tasks:
//1. Calculate the average score for each team, using the test data below
//2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
//3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
//Test data:
//Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// Test data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

let dolphinsAvg1 = dolphinsScores1.reduce((a, b) => a + b, 0) / dolphinsScores1.length;
let koalasAvg1 = koalasScores1.reduce((a, b) => a + b, 0) / koalasScores1.length;

console.log('Test Data 1:');
if (dolphinsAvg1 > koalasAvg1) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsAvg1.toFixed(2)}!`);
} else if (koalasAvg1 > dolphinsAvg1) {
    console.log(`Koalas win the trophy with an average score of ${koalasAvg1.toFixed(2)}!`);
} else {
    console.log(`It's a draw with both teams having an average score of ${dolphinsAvg1.toFixed(2)}!`);
}

// Bonus 1: Minimum score requirement
let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

let dolphinsAvgBonus1 = dolphinsScoresBonus1.reduce((a, b) => a + b, 0) / dolphinsScoresBonus1.length;
let koalasAvgBonus1 = koalasScoresBonus1.reduce((a, b) => a + b, 0) / koalasScoresBonus1.length;

console.log('\nBonus Data 1:');
if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsAvgBonus1.toFixed(2)}!`);
} else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
    console.log(`Koalas win the trophy with an average score of ${koalasAvgBonus1.toFixed(2)}!`);
} else if (dolphinsAvgBonus1 === koalasAvgBonus1 && dolphinsAvgBonus1 >= 100 && koalasAvgBonus1 >= 100) {
    console.log(`It's a draw with both teams having an average score of ${dolphinsAvgBonus1.toFixed(2)} and at least 100 points!`);
} else {
    console.log('No team wins the trophy.');
}

// Bonus 2: Minimum score requirement for a draw
let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];

let dolphinsAvgBonus2 = dolphinsScoresBonus2.reduce((a, b) => a + b, 0) / dolphinsScoresBonus2.length;
let koalasAvgBonus2 = koalasScoresBonus2.reduce((a, b) => a + b, 0) / koalasScoresBonus2.length;

console.log('\nBonus Data 2:');
if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsAvgBonus2.toFixed(2)}!`);
} else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
    console.log(`Koalas win the trophy with an average score of ${koalasAvgBonus2.toFixed(2)}!`);
} else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
    console.log(`It's a draw with both teams having an average score of ${dolphinsAvgBonus2.toFixed(2)} and at least 100 points!`);
} else {
    console.log('No team wins the trophy.');
}