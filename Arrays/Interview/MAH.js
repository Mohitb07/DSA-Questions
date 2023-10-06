/*Largest Rectangle in Histogram

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example 1:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Example 2:
Input: heights = [2,4]
Output: 4

Constraints:
    1 <= heights.length <= 105
    0 <= heights[i] <= 104
*/

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const largestRectangleArea = (arr) => {
  let maxArea = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let minHeight = Infinity;
    for (let j = i; j < arr.length; j++) {
      minHeight = Math.min(minHeight, arr[j]);
      const width = j - i + 1;
      const currentArea = minHeight * width;
      maxArea = Math.max(maxArea, currentArea);
    }
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([6, 2, 5, 4, 5, 1, 6])); // 12
console.log(largestRectangleArea([2, 4])); //4

// Solution 2: Stack
// Time Complexity: O(n)
// Space Complexity: O(n)

const largestRectangleArea2 = (arr) => {
  const area = [];
  const nearestSmallerLeft = (arr) => {
    const stack = [];
    const indexs = [];
    const pseudoIndex = -1;

    for (let i = 0; i < arr.length; i++) {
      if (!stack.length) {
        indexs.push(pseudoIndex);
      } else if (stack.length > 0 && stack[stack.length - 1].value < arr[i]) {
        indexs.push(stack[stack.length - 1].index);
      } else if (stack.length > 0 && stack[stack.length - 1].value >= arr[i]) {
        while (stack.length > 0 && stack[stack.length - 1].value >= arr[i]) {
          stack.pop();
        }

        if (!stack.length) {
          indexs.push(pseudoIndex);
        } else {
          indexs.push(stack[stack.length - 1].index);
        }
      }

      stack.push({
        value: arr[i],
        index: i,
      });
    }

    return indexs;
  };

  const nearestSmallerRight = (arr) => {
    const stack = [];
    const indexs = [];
    const pseudoIndex = arr.length;

    for (let i = arr.length - 1; i >= 0; i--) {
      if (!stack.length) {
        indexs.push(pseudoIndex);
      } else if (stack.length > 0 && stack[stack.length - 1].value < arr[i]) {
        indexs.push(stack[stack.length - 1].index);
      } else if (stack.length > 0 && stack[stack.length - 1].value >= arr[i]) {
        while (stack.length > 0 && stack[stack.length - 1].value >= arr[i]) {
          stack.pop();
        }
        if (!stack.length) {
          indexs.push(pseudoIndex);
        } else {
          indexs.push(stack[stack.length - 1].index);
        }
      }

      stack.push({
        value: arr[i],
        index: i,
      });
    }

    return indexs.reverse();
  };

  const leftIndexs = nearestSmallerLeft(arr);
  const rightIndexs = nearestSmallerRight(arr);

  for (let i = 0; i < arr.length; i++) {
    let width = rightIndexs[i] - leftIndexs[i] - 1;
    area[i] = arr[i] * width;
  }

  return Math.max(...area);
};

console.log(largestRectangleArea2([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea2([6, 2, 5, 4, 5, 1, 6])); // 12
console.log(largestRectangleArea2([2, 4])); //4
