// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Solutions:

// 1. Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

const generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) row.push(1);
      else row.push(result[i - 1][j - 1] + result[i - 1][j]);
    }
    result.push(row);
  }
  return result;
};

const generate2 = function (numRows) {
  if (numRows === 1) return [[1]];
  const result = [[1], [1, 1]];
  for (let i = 3; i <= numRows; i++) {
    const newArray = Array(i).fill(1);
    for (let j = 1; j <= i - 2; j++) {
      const preResult = result[i - 2];
      newArray[j] = preResult[j] + preResult[j - 1];
    }
    result.push(newArray);
  }
  return result;
};

console.log(generate2(5));

const generatePascalTriangle = function (numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    let num = 1; // Initialize the first element of each row as 1
    row.push(num);
    for (let j = 1; j <= i; j++) {
      num = (num * (i - j + 1)) / j; // Compute each element using the formula
      row.push(num);
    }
    triangle.push(row);
  }

  return triangle;
};

console.log(generatePascalTriangle(5));
