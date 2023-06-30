// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array
// in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
// Example 1:
// Given nums = [3,2,2,3], val = 3,
// Your function should return length = 2,
// with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length.
// Example 2:
// Given nums = [0,1,2,2,3,0,4,2], val = 2,
// Your function should return length = 5,
// with the first five elements of nums containing 0, 1, 3, 0, and 4.
// Note that the order of those five elements can be arbitrary.

// Solution 1: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
const removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++)
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  return i;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2

// Solution 2: Two Pointers - when elements to remove are rare
// Time Complexity: O(n)
// Space Complexity: O(1)
const removeElement2 = function (nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
};

console.log(removeElement2([3, 2, 2, 3], 3)); // 2


