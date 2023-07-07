/*  
    Trapping Rain Water
    
    Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

    Exapmle 1:

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

    Example 2:

    Input: height = [4,2,0,3,2,5]
    Output: 9
*/

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const trap = function (height) {
  let totalWater = 0;

  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;

    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }

    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    totalWater += Math.min(leftMax, rightMax) - height[i];
  }

  return totalWater;
};
console.log(trap([4, 2, 0, 3, 2, 5]));

// Solution 2: Dynamic Programming
// Time Complexity: O(n)
// Space Complexity: O(n)

const trap2 = function (height) {
  let totalWater = 0;
  let leftMax = [];
  let rightMax = [];

  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWater;
};
console.log(trap2([4, 2, 0, 3, 2, 5]));

// Solution 3: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

const trap3 = function (height) {
  let totalWater = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax
        ? (leftMax = height[left])
        : (totalWater += leftMax - height[left]);
      left++;
    } else {
      height[right] >= rightMax
        ? (rightMax = height[right])
        : (totalWater += rightMax - height[right]);
      right--;
    }
  }

  return totalWater;
};

console.log(trap3([4, 2, 0, 3, 2, 5]));
