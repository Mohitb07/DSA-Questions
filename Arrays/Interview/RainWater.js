/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

*/

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const trap = (heights = []) => {
  let maxWater = 0;

  for (let i = 0; i < heights.length; i++) {
    let leftMax = 0;
    let rightMax = 0;

    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, heights[j]);
    }

    for (let j = i; j < heights.length; j++) {
      rightMax = Math.max(rightMax, heights[j]);
    }

    maxWater += Math.min(leftMax, rightMax) - heights[i];
  }

  return maxWater;
};

const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height2 = [4, 2, 0, 3, 2, 5];
console.log(trap(height1));
console.log(trap(height2));

// Solution 2: Dynamic Programming
// Time Complexity: O(n)
// Space Complexity: O(n)

const trap2 = (heights = []) => {
  let maxWater = 0;
  let leftMax = [];
  let rightMax = [];

  leftMax[0] = heights[0];
  for (let i = 1; i < heights.length; i++) {
    leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
  }
  rightMax[heights.length - 1] = heights[heights.length - 1];
  for (let i = heights.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
  }

  for (let i = 0; i < heights.length; i++) {
    maxWater += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }

  return maxWater;
};

console.log(trap2(height1));
console.log(trap2(height2));

// Solution 3: Using Stack
// Time Complexity: O(n)
// Space Complexity: O(n)

const trap3 = (heights = []) => {
  let maxWater = 0;
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] > heights[stack[stack.length - 1]]) {
      let top = stack.pop();
      if (!stack.length) break;
      let distance = i - stack[stack.length - 1] - 1;
      let boundedHeight =
        Math.min(heights[i], heights[stack[stack.length - 1]]) - heights[top];
      maxWater += distance * boundedHeight;
    }
    stack.push(i);
  }

  return maxWater;
};

console.log(trap3(height1));
console.log(trap3(height2));

// Solution 4: Using Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

const trap4 = (heights = []) => {
  let maxWater = 0;
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      heights[left] >= leftMax
        ? (leftMax = heights[left])
        : (maxWater += leftMax - heights[left]);
      left++;
    } else {
      heights[right] >= rightMax
        ? (rightMax = heights[right])
        : (maxWater += rightMax - heights[right]);
      right--;
    }
  }

  return maxWater;
};

console.log(trap4(height1));
console.log(trap4(height2));

