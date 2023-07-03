// Maximum Contiguous Subarray Sum
// Given an array of integers, find the maximum sum of a contiguous subarray.

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// Kadane's Algorithm
// Time: O(n)
// Space: O(1)

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
