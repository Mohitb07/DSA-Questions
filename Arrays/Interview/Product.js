// Product of Array Except Self: Given an array, return an array where each element is the product of all elements except itself.

// Input: [1,2,3,4]
// Output: [24,12,8,6]

// Input: [0,1,2,3]
// Output: [6,0,0,0]

// Input: [1,2,3,0]
// Output: [0,0,0,6]

const product = (arr) => {
  const totalProducts = arr.reduce((acc, curr) => {
    if (curr !== 0) {
      return acc * curr;
    } else {
      return acc * 1;
    }
  }, 1);
  const caseZeroResult = Array(arr.length).fill(0);
  const caseNoZeroResult = Array(arr.length);
  let containsZero = false;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      containsZero = true;
      zeroCount++;
      caseZeroResult[i] = totalProducts;
    }
    if (zeroCount > 1) return Array(arr.length).fill(0);
  }
  for (let i = 0; i < arr.length; i++) {
    caseNoZeroResult[i] = totalProducts / arr[i];
  }
  if (containsZero) return caseZeroResult;
  return caseNoZeroResult;
};

console.log(product([1, 2, 3, 4]));
console.log(product([0, 1, 2, 3]));
console.log(product([1, 2, 3, 0]));
console.log(product([0, 2, 3, 0]));

const product2 = (arr) => {
  let result = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = left;
    left *= arr[i];
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= right;
    right *= arr[j];
  }
  return result;
};

console.log(product2([1, 2, 3, 4]));
console.log(product2([0, 1, 2, 3]));
console.log(product2([1, 2, 3, 0]));
console.log(product([0, 2, 3, 0]));
