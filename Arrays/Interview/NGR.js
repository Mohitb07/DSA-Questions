// You are given an array of integers, for each element find the next greater element to right. If there is no greater element, return -1.

// Example:
// Input: [2, 1, 2, 4, 3]
// Output: [4, 2, 4, -1, -1]
// Explanation:
// There is no greater element for 4.
// There is no greater element for 2.
// There is no greater element for 4.
// For 2, there is no greater element to the right.
// For 3, the greater element to the right is 4.
//

// Solution 1 O(n^2)

const arr = [2, 1, 2, 4, 3];
const arr1 = [1, 3, 2, 4];

const nextGreaterElement = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let isFound = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isFound = true;
        result.push(arr[j]);
        break;
      }
    }
    if (!isFound) result.push(-1);
  }
  return result;
};

// console.log(nextGreaterElement(arr)); // [4, 2, 4, -1, -1]

// Solution 2 O(n) (Using stack)

const nextGreaterElementStack = (arr) => {
  const result = [];
  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!stack.length) {
      result.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      result.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }

  return result.reverse();
};

console.log(nextGreaterElementStack(arr));
