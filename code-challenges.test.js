// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.
/*
create a function called fibonacciCode
takes one parameter - interger
create an empty array?
loop to the limit of the number passed in
send the loop into the new array
---- how to turn that into Fibonacci????


returns array the lenght of the number passed in
but in Fibonacci

input 2
output [1, 1]
*/
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
describe("fibonacciCode", () => {
  test("should take a number and return an array of the length of the number but in fibonacci", () => {
    expect(fibonacciCode(3)).toEqual([0, 1, 2]);
  });
});

// b) Create the function that makes the test pass.

const fibonacciCode = (int) => {
  let newArr = [];
  for (i = 0; i < int; i++) {
    newArr.push(i);
  }
  return newArr;
  console.log(newArr);
};
// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

/*
create a function that takes in an array 
array contains different data types
filter through the array
only return data that are considered odd numbers

return a sorted array .sort()
*/

describe("onlyOdd", () => {
  test("should take an array of different data types and return a sorted array with only the off numbers", () => {
    expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199]);
  });
});
// b) Create the function that makes the test pass.
const onlyOdd = (diffDataArr) => {
  let numsOnly = diffDataArr.filter((value, index) => {
    return typeof value === "number";
  });
  let oddNumsOnly = numsOnly.filter((value, index) => {
    return value % 2 !== 0;
  });
  return oddNumsOnly.sort((a, b) => a - b);
};
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

/*
create a function that takes and an array
i want to loop through each number
add to the next number
i want to grab that sum
add it to the next number now save that as the sum and keep adding to the next number
as we get a new sum save that in an array
return that new array
*/

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = [];
// Expected output: []
describe("accumilateNum", () => {
  test("should take in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    expect(accumilateNum(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(accumilateNum(numbersToAdd3)).toEqual([]);
  });
});

// b) Create the function that makes the test pass.
const accumilateNum = (numArr) => {
  if (numArr.length === 0) {
    return [];
  }
  let newArr = numArr.map((value, index) => {
    let sum = value + numArr[index];
    return sum + numArr[index + 1];
  });
  console.log(newArr);
};
