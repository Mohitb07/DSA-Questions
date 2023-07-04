/* 
    Rotate Array: Rotate an array by k steps to the right.
    Example 1:
    Input: [1,2,3,4,5,6,7] and k = 3
    Output: [5,6,7,1,2,3,4]

    Example 2:
    Input: [-1,-100,3,99] and k = 2
    Output: [3,99,-1,-100]

    Note:
    Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
    Could you do it in-place with O(1) extra space?
*/
const rotateArray = (arr, k) => {
  let rightResult = [];
  let leftResult = [];
  const start = arr.length - k;
  for (let i = start; i < arr.length; i++) {
    rightResult.push(arr[i]);
  }
  for (let i = 0; i < start; i++) {
    leftResult.push(arr[i]);
  }
  return rightResult.concat(leftResult);
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([-1, -100, 3, 99], 2));

const rotateArray2 = (arr, k) => {
  for (let i = arr.length - k; i < arr.length; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray2([-1, -100, 3, 99], 2));

// Solution 1: Brute Force
// Time Complexity: O(n * k)
// Space Complexity: O(1)
const rotateArray3 = (arr, k) => {
  for (let i = 0; i < k; i++) {
    const last = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = last;
  }
  return arr;
};
console.log(rotateArray3([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray3([-1, -100, 3, 99], 2));

// Solution 2: Using Extra Array
// Time Complexity: O(n)
// Space Complexity: O(n)
const rotateArray4 = (arr, k) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
  }
  return result;
};
console.log(rotateArray4([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray4([-1, -100, 3, 99], 2));

// Solution 3: Using Cyclic Replacements
// Time Complexity: O(n)
// Space Complexity: O(1)
const rotateArray5 = (arr, k) => {
  k %= arr.length;
  let count = 0;
  for (let start = 0; count < arr.length; start++) {
    let current = start;
    let prev = arr[start];
    do {
      const next = (current + k) % arr.length;
      const temp = arr[next];
      arr[next] = prev;
      prev = temp;
      current = next;
      count++;
    } while (start !== current);
  }
  return arr;
};
console.log(rotateArray5([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray5([-1, -100, 3, 99], 2));

// Solution 4: Using Reverse
// Time Complexity: O(n)
// Space Complexity: O(1)
const rotateArray6 = (arr, k) => {
  k %= arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
};

const reverse = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start++] = arr[end];
    arr[end--] = temp;
  }
};

console.log(rotateArray6([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray6([-1, -100, 3, 99], 2));
