// Two Sum: Find two numbers in an array that add up to a target sum.

// Input: [1, 3, 6, 2, 5, 4, 3], 6
// Output: [0, 3]

// Explanation: nums[0] + nums[3] = 1 + 5 = 6, return [0, 4].

// Brute Force
// Time: O(n^2)
// Space: O(1)

function twoSum(nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === targetSum) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 3, 6, 2, 5, 4, 3], 6)); // [0, 4]

// Hash Table
// Time: O(n)
// Space: O(n)

function twoSum2(nums, targetSum) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentMapVal = numsMap[nums[i]];
    if (currentMapVal >= 0) {
      return [currentMapVal, i];
    } else {
      const numberToFind = targetSum - nums[i];
      numsMap[numberToFind] = i;
    }
  }
}

console.log(twoSum2([1, 3, 6, 2, 5, 4, 3], 6)); // [0, 4]
