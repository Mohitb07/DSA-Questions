/*
    Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

    Example 1:
    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

    Example 2:
    Input: intervals = [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)

const merge = function (intervals) {
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    for (let j = i + 1; j < intervals.length; j++) {
      let [currentStart, currentEnd] = intervals[j];
      if (currentStart <= end && currentEnd >= start) {
        start = Math.min(start, currentStart);
        end = Math.max(end, currentEnd);
        intervals.splice(j, 1);
        j--;
      }
    }
    result.push([start, end]);
  }
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  merge([
    [1, 3],
    [4, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);

// Solution 2: Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

const merge2 = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(prev);
      prev = curr;
    }
  }
  result.push(prev);
  return result;
};
console.log(
  merge2([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);

// console.log(
//   merge2([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
// console.log(
//   merge2([
//     [1, 4],
//     [4, 5],
//   ])
// );
// console.log(
//   merge2([
//     [1, 3],
//     [4, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
