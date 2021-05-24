// var numbersToAdd1 = [2, 4, 45, 9];
// // Excpected output: [2, 6, 51, 60]

// const accumilateNum = (numArr) => {
//   let newArr = [];
//   //   let cummilate = newArr[0] + numArr[1];
//   //   newArr.push(cummilate);
//   for (i = 0; i < numArr.length; i++) {
//     if (newArr.length === 0) {
//       newArr.push(numArr[0]);
//     } else {
//     //   newArr.push(newArr[i] + numArr[i + 1]);
//     console.log(newArr[i])
//     }
//   }
//   console.log(newArr);
//   return newArr;
// };

// accumilateNum(numbersToAdd1);

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]

var numbersToAdd3 = [];
// Expected output: []

const accumilateNum = (numArr) => {
  //   let newArr = numArr.map((value, index) => {
  //     let sum = value + numArr[index];
  //     return sum + numArr[index + 1];
  //   });
  //   console.log(newArr);
  if (numArr.length === 0) {
    return [];
  }
};

// accumilateNum(numbersToAdd1);
console.log(accumilateNum(numbersToAdd3));
