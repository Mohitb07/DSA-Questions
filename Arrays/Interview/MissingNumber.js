// Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.

/*
Input: [3, 0, 1]
Output: 2

Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
Output: 8

Input: [0]
Output: 1

Input: [1]
Output: 0

Input: [0, 1]
Output: 2
 */

// Brute Force
// Time: O(n^2)
// Space: O(1)

function missingNumber(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}

// console.log(missingNumber([3, 0, 1])); // 2

// Hash Table
// Time: O(n)
// Space: O(n)

function missingNumber2(nums) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    numsMap[nums[i]] = i;
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!(numsMap[i] >= 0)) {
      return i;
    }
  }
}

// console.log(missingNumber2([3, 0, 1])); // 2
console.log("new", missingNumber2([0, 1])); // 2

// Gauss' Formula
// Time: O(n)
// Space: O(1)

function missingNumber3(nums) {
  const expectedSum = (nums.length * (nums.length + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b);

  return expectedSum - actualSum;
}

// console.log(missingNumber3([3, 0, 1])); // 2

// Bit Manipulation
// Time: O(n)
// Space: O(1)

function missingNumber4(nums) {
  let missing = nums.length;

  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }

  return missing;
}

// console.log(missingNumber4([3, 0, 1])); // 2

// Sorting
// Time: O(n log n)
// Space: O(1) or O(n)

function missingNumber5(nums) {
  nums.sort((a, b) => a - b);

  if (nums[nums.length - 1] !== nums.length) {
    console.log(nums[nums.length - 1]);
    return nums.length;
  } else if (nums[0] !== 0) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    const expectedNum = nums[i - 1] + 1;
    if (nums[i] !== expectedNum) {
      return expectedNum;
    }
  }
}
// nums = [0, 1, 3]
// console.log(missingNumber5([3, 0, 1])); // 2

// Set
// Time: O(n)
// Space: O(n)

function missingNumber6(nums) {
  const numSet = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
}

// console.log(missingNumber6([3, 0, 1])); // 2

// Binary Search (if sorted)
// Time: O(n log n)
// Space: O(1)

function missingNumber7(nums) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high){
    const mid = Math.floor(low + (high - low) /2)

    if(nums[mid] === mid){
      low = mid + 1;
    }else {
      high = mid - 1;
    }
  }

  return low;
}

console.log(missingNumber7([0, 1 ,3])); // 2