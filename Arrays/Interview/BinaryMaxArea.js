/*

Given a binary matrix, find the maximum size rectangle binary-sub-matrix with all 1’s. 

Example: 

Input:
0 1 1 0
1 1 1 1
1 1 1 1
1 1 0 0
Output :
8
Explanation : 
The largest rectangle with only 1's is from 
(1, 0) to (2, 3) which is
1 1 1 1
1 1 1 1 

Input:
0 1 1
1 1 1
0 1 1      
Output:
6
Explanation : 
The largest rectangle with only 1's is from 
(0, 1) to (2, 2) which is
1 1
1 1
1 1

*/

const maximumAreaHistogram = (arr) => {
  const result = [];

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
    const width = rightIndexs[i] - leftIndexs[i] - 1;
    const height = arr[i];
    const currentBarArea = height * width;
    result[i] = currentBarArea
  }
  return Math.max(...result);
};

const maxArea = (arr, m, n) => {
  const aux = [];
  for (let j = 0; j < m; j++) {
    aux.push(arr[0][j]);
  }
  let max = maximumAreaHistogram(aux);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        aux[j] = 0;
      } else {
        aux[j] = aux[j] + arr[i][j];
      }
    }
    max = Math.max(max, maximumAreaHistogram(aux))
  }

  return max;
};

const arr = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];

console.log(maxArea(arr, 4, 4));
