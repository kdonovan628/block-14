// Create prompt requesting user input (numbers separated by commas)

// Convert user input into an array of individual numbers

// Go through each string in the array 
  // convert the string into a number 
  // create an empty array
  // add the converted number to the empty array

// Create functions: 

  // getLength (takes in an array of numbers)
    // gets length of the numbers array using length method 
    // returns the length

  // getSum (takes in an array of numbers)
    // iterate over the numbers in the array
      // create a variable `total`
      // add each number to the `total`
    // return `total`

  // getMean (takes in an array of numbers)
    // divide the getSum by the getLength
    //return the dividend

  // getMin (takes in an array of numbers)
    // create a variable called `lowestNum` set to the first number in the array
    // go through each number
      // compare the current number to `lowestNum`
      // if the current number is lower than the `lowestNum`
        // replace the `lowestNum` with the current number
      // return `lowestNum`

  // get Max (takes in an array of numbers)
    // create a variable called `highestNum` set to the first number in the array
    // go through each number
      // compare the current number to `highestNum`
      // if the current number is higher than `highestNum`
        // replace the `highestNum` with the current number
      // return `highestNum`

  //getRange (takes in an array of numbers)
    // return getMax minus the getMin

  //getEvens (takes in an array of numbers)
    // create a variable called `evens` that is set to []
    // go through each number
      // figure out if the number is even
      // if the number is even
        // add it to the `evens` array
    // return `evens` 

  //getOdds
    // create a variable called `odds` that is set to []
    // go through each number
      // figure out if the number is odd
      // if the number is odd
        // add it to the `odds` array
    // return `odds` 

// Push to GitHub

const userInput = prompt(`Enter numbers separated by commas`);

const userInputArray = userInput.split(",");
console.log(`STRINGS: `, userInputArray);

const numbers = [];

for(let i = 0; i < userInputArray.length; i++) {
  const numAsStr = userInputArray[i];
  const convertedNum = Number(numAsStr);
  numbers.push(convertedNum);
}

const getLength = (nums) => {
  const numsLength = nums.length;
  return numsLength
}; 

const getSum = (nums) => {
  let total = 0;
 for(let i = 0; i < nums.length; i++) {
  const number = nums[i];
  total += number;
 }
 return total;
}

const getMean = (nums) => {
  const dividend = getSum(nums) / getLength(nums);
return dividend;
}

const getMin = (nums) => {
  let lowestNum = nums[0];

  for(let i = 1; i < nums.length; i++) {
    if (nums[i] < lowestNum) {
      lowestNum = nums[i];
    }
  }
return lowestNum;
}

const getMax = (nums) => {
  let highestNum = nums[0];

  for(let i = 1; i < nums.length; i++) {
    if (nums[i] > highestNum) {
      highestNum = nums[i]; }
  }
return highestNum;
}

const getRange = (nums) => {
  return getMax(nums) - getMin(nums);
}

const getEvens = (nums) => {
  let evens = [];

  for(let i = 0; i < numbers.length; i++)
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    }
return evens;
}

const getOdds = (nums) => {
  let odds = [];

  for(let i = 0; i < numbers.length; i++)
    if (nums[i] % 2 !== 0) {
      odds.push(nums[i]);
    }
return odds;
}
    console.log("Length:", getLength(numbers));
    console.log("Sum:", getSum(numbers));
    console.log("Mean:", getMean(numbers));
    console.log("Min:", getMin(numbers));
    console.log("Max:", getMax(numbers));
    console.log("Range:", getRange(numbers));
    console.log("Evens:", getEvens(numbers));
    console.log("Odds:", getOdds(numbers));