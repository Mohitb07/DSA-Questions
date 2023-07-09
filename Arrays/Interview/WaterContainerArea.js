/*
    Container With Most Water

    You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.

    Example 1:

    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49

    Example 2:

    Input: height = [1,1]
    Output: 1
*/

// Solution 1
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const maxArea = function (height) {
  let area = 0;
  let currentArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let w = j - i;
      let h = Math.min(height[i], height[j]);
      currentArea = w * h;
      area = Math.max(area, currentArea);
    }
  }
  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Solution 2
// Time Complexity: O(n)
// Space Complexity: O(1)

const maxArea2 = function (height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    let currentArea = width * h;
    area = Math.max(currentArea, area);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
