// Create prompt requesting user input (numbers separated by commas)
// Convert user input into an array
// Convert strings in array into numbers
// Create functions: getLength, getSum, getMean, getMin, get Max, getRange, getEvens, getOdds.
// Push to GitHub

const userInput = prompt(`Enter lucky numbers separated by commas`, `6, 28, 93, 1993, 42`);

const luckyStrings = userInput.split(",");
console.log(`LUCKY STRINGS: `, luckyStrings);

const luckyNumbers = [];

for(let index = 0; index < luckyStrings.length; index = index +1) {
  console.log(`INDEX: `, index);
  console.log(`LUCKY STRING: `, luckyStrings[index]);

  const luckyNumber = Number(luckyStrings[index]);
  luckyNumbers.push(luckyNumber);
}

console.log(`LUCKY NUMBERS: `, luckyNumbers);

const getLength = (arr) => arr.length; 

const getSum = (arr) => arr.reduce((acc,num) => acc + num, 0);

const getMean = (arr) => getSum(arr) / getLength(arr);

const getMin = (arr) => Math.min(...arr);

const getMax = (arr) => Math.max(...arr);

const getRange = (arr) => getMax(arr) - getMin(arr);

const getEvens = (arr) => arr.filter(num => num % 2 === 0);

const getOdds = (arr) => arr.filter(num => num % 2 !== 0);

    console.log("Length:", getLength(luckyNumbers));
    console.log("Sum:", getSum(luckyNumbers));
    console.log("Mean:", getMean(luckyNumbers));
    console.log("Min:", getMin(luckyNumbers));
    console.log("Max:", getMax(luckyNumbers));
    console.log("Range:", getRange(luckyNumbers));
    console.log("Evens:", getEvens(luckyNumbers));
    console.log("Odds:", getOdds(luckyNumbers));