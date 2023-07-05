/* 
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
    Note that you must do this in-place without making a copy of the array.
    
    Example 1:
        Input: nums = [0,1,0,3,12]
        Output: [1,3,12,0,0]

    Example 2:
        Input: nums = [0]
        Output: [0]
*/

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    }
  }
  // Move all the non-zero elements to the front
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  // Fill remaining space with 0
  while (count > 0) {
    nums[index] = 0;
    index++;
    count--;
  }

  return nums;
};

console.log(moveZeroes([0, 0, 1]));

// Solution 2: Optimal
// Time Complexity: O(n)
// Space Complexity: O(1)

const moveZeroes2 = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not 0, then we need to
    // append it just in front of last non 0 element we found
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  // After we have finished processing new elements,
  // all the non-zero elements are already at beginning of array.
  // We just need to fill remaining array with 0's.
  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }

  return nums;
};

console.log(moveZeroes2([0, 0, 1]));

// Solution 3: Two pointer
// Time Complexity: O(n)
// Space Complexity: O(1)

const moveZeroes3 = function (nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }

  return nums;
};

console.log(moveZeroes3([0, 0, 1]));
